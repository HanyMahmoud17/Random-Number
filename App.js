import { StyleSheet, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <MainScreen/>
    </LinearGradient>
  ); 
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    // backgroundColor:'#ddb52f'
  }
});
