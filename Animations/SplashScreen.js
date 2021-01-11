import React, { Component } from 'react';
import { styles } from "../styles/style";
import { Animated, View, Easing, Image, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class Splash extends Component {

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
      this.createAnimation(this.state.animationValue, 4000, Easing.linear, 500).start()
  }
  Loading = () => {
    this.createAnimation(this.state.animationOpacity, 10000, Easing.linear, 500).start()
  }

  render() {

    const logoScale = this.state.animationValue.interpolate({
      inputRange: [0, 0.40, 0.9, 1],
      outputRange: [0, 0.45,0.45, 0]
    })
    const LoadingOpacity = this.state.animationOpacity.interpolate({
      inputRange: [0, 0.15, 0.30, 0.45, 0.60, 0.75, 0.90, 1],
      outputRange: [0, 0.3, 0, 0.45, 0, 0.6, 0, 1]
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
                style={styles.logo}
                source={require('../images/twitter.png')} />
          </Animated.View>
          <View style={styles.viewSecond}>
            <Text onPress={this.Loading}
              style={styles.loadingText}>Run Loading</Text>
            <Animated.Image source={require('../images/Garfield.png')}
              style={[styles.loadingImage, {opacity: LoadingOpacity} 
              ]}/>
          </View>
        </View>
      </LinearGradient>
    );
  }
};
