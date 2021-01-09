import React, {Component} from 'react';

import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      animationValue : new Animated.Value(1),
    }
  }

  startScaleAnimation=()=>{

    Animated.timing(this.state.animationValue, {
      toValue : 2,
      timing : 1200
    }).start(()=>{
      Animated.timing(this.state.animationValue,{
        toValue : 1,
        duration : 1200
      }).start();
    })
  }

  render() {

    const animatedStyle = {

      transform : [
        {
          scale : this.state.animationValue
        }
      ]

    }

    return (
     
        <View style={styles.MainContainer}>

         <TouchableWithoutFeedback onPress={this.startScaleAnimation}>

           <Animated.View style={[styles.animatedBox, animatedStyle]} />
           
         </TouchableWithoutFeedback>  

        </View>
    );
  }
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    padding: 12

  },
  animatedBox:
  {
     width : 180,
     height: 180,
     backgroundColor : '#FF6F00'
  },

});
