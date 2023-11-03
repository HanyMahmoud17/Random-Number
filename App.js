import { useState } from 'react';
import { StyleSheet, View,ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const[userNumber,setUserNumber]=useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen=<MainScreen onPickedNumber={pickedNumberHandler}/>
  
  if(userNumber){
    screen = <GameScreen/>
  }
  // console.log(screen);

  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} source={require('./assets/images/background.jpg')} resizeMode='cover'>
      <SafeAreaView style={styles.rootScreen}>
        {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  ); 
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    // backgroundColor:'#ddb52f',
  },
  backgroundImage:{
    opacity:0.25
  }
});
