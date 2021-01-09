import React, { Component } from 'react';

import { Animated, StyleSheet, View, Easing, Image, TouchableOpacity, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      animationValue: new Animated.Value(0.2),
      animationOpacity: new Animated.Value(0)
    }
  }
  componentDidMount() {
    this.myAnimation()
  }
  // startOpacityAnimation=()=>{
  //   this.state.animationValue.setValue(0)
  //   Animated.seq
  // }

  createAnimation = (value, duration, easing, delay = 0) => {
    this.state.animationOpacity.setValue(0);
    this.state.animationValue.setValue(0)
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay,
        useNativeDriver: true
      },
    )
  }

  myAnimation = () => {
    Animated.sequence([
      this.createAnimation(this.state.animationValue, 3200, Easing.linear, 500),

    ]).start()
  }
  Loading = () => {
    this.createAnimation(this.state.animationOpacity, 10000, Easing.linear, 500).start()
  }

  render() {

    const logoScale = this.state.animationValue.interpolate({
      inputRange: [0, 0.4, 1],
      outputRange: [0, 0.7, 0]
    })
    const LoadingOpacity = this.state.animationOpacity.interpolate({
      inputRange: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
      outputRange: [0, 0.6, 0, 0.7, 0, 0.8, 0, 1, 0]
    })

    return (
      <LinearGradient
        colors={['#4682B4', 'red', '#4682B4']}
        style={{ flex: 1 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>

        <View style={styles.MainContainer}>
          <Animated.View style={[styles.animatedBox, { transform: [{ scale: logoScale }] }]}>
              <Image
                style={{
                  alignSelf: 'center', width: 580, height: 580, borderRadius: 105, borderColor: 'white',
                  borderWidth: 10, padding: 0
                }}
                source={require('./images/logo2.png')} />
          </Animated.View>
          <View style={{flex:1}}>
            <Text onPress={this.Loading}
              style={{ fontSize: 30, backgroundColor: 'white', color: 'black' }}>Run Loading</Text>
            <Animated.Image source={require('./images/logo2.png')}
              style={{width: 400, height: 400, opacity: LoadingOpacity }} />
          </View>



        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,

  },
  animatedBox:
  {
    flex:1,
    width: 180,
    height: 180,
  },

});
