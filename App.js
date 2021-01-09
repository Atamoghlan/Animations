import React, {Component} from 'react';

import { Animated, StyleSheet, View, TouchableWithoutFeedback, Easing , Image} from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      animationValue : new Animated.Value(0.2),
    }
  }

  startScaleAnimation=()=>{

    Animated.timing(this.state.animationValue, {
      toValue : 1.5,
      timing : 1200,
      easing: Easing.linear
    }).start(()=>{
      Animated.timing(this.state.animationValue,{
        toValue : 1,
        timing : 1200,
        easing: Easing.linear
      }).start(()=> {
        Animated.timing(this.state.animationValue,{
          toValue : 0,
          duration : 4000,
          easing: Easing.linear
        }).start()
      })
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

           <Animated.View style={[styles.animatedBox, animatedStyle]}>
             <Image
             style={{alignSelf: 'center', width: 280, height: 280, borderRadius: 15, borderColor: 'black',
              borderWidth: 10, padding: 0}}
             source={require('./images/logo2.png')}/>
           </Animated.View>


           
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
  },

});
