import { StyleSheet, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MainScreen from './screens/MainScreen';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} source={require('./assets/images/background.jpg')} resizeMode='cover'>
        <MainScreen/>
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
