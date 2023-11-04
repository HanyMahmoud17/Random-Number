import { useState } from 'react';
import { StyleSheet, View,ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

export default function App() {

  const[userNumber,setUserNumber]=useState();
  const[gameIsOver,setGameIsOver]=useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }
  // change the value of gameOver
  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen=<MainScreen onPickedNumber={pickedNumberHandler}/>

  
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen= <GameOverScreen />
  }

  // console.log(screen);

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
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
  },
  backgroundImage:{
    opacity:0.25
  }
});
