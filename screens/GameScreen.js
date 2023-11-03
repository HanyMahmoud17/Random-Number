import { View,Text,StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomNumner(max,min, exclude){
    const rndNum=Math.floor(Math.random() * (max-min) ) + min ;

if(rndNum === exclude){
    return generateRandomNumner(max,min,exclude);
}else {
    return rndNum;
}
}

function GameScreen({userNumber}){
    const initialGuess=generateRandomNumner(1,100,userNumber)
    const[currentGuess,setCurrentGuess]=useState(initialGuess)

return (
    <View style={styles.mainContainer}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
    </View>
)
}

export default GameScreen;
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingTop:60,
        paddingHorizontal:24
        // padding:55
    },

  });