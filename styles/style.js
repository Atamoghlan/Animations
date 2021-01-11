import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    loadingImage: {
      marginTop: 20 ,width: 330, height: 220,
      resizeMode: 'stretch'
    },
    animatedBox:
    {
      flex:1,
      width: 160,
      height: 160,
    },
    viewSecond:
    {
      flex:1
    },
    logo:
    {
      alignSelf: 'center', width: 580, height: 580, borderRadius: 105, 
      padding: 0
    },
    loadingText:{
       marginTop: 60,fontSize: 30, backgroundColor: 'blue', color: 'white',width: 200, 
    alignSelf: 'center' 
   },
  
  
  });
  