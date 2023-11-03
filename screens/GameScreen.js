import { View,Text,StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Alert } from "react-native";

function generateRandomNumner(max,min, exclude){
    const rndNum=Math.floor(Math.random() * (max-min) ) + min ;

if(rndNum === exclude){
    return generateRandomNumner(max,min,exclude);
}else {
    return rndNum;
}
}

let minNumber=1;
let maxNumber=100;

function GameScreen({userNumber,onGameOver}){
    const initialGuess=generateRandomNumner(minNumber,maxNumber,userNumber)
    const[currentGuess,setCurrentGuess]=useState(initialGuess)

    // to check if game is over or not
    useEffect(()=>{
        if(currentGuess ==  userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver])

    function nextGuessNumber(direction){
        if((direction==='lower'&& currentGuess < userNumber) || (direction==='higher'&& currentGuess > userNumber)){
            Alert.alert("Don't lie",'you show click on the right button...',
            [{text:'Sorry!',style:'cancel'}]
            )
            return;
        }
        if(direction === 'lower'){
            maxNumber=currentGuess
        }else {
            minNumber=currentGuess+1
        }
        const newRandomNumber=generateRandomNumner(minNumber,maxNumber,currentGuess)
        setCurrentGuess(newRandomNumber)
    }

return (
    <View style={styles.mainContainer}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower ? </Text>
            <View>
                <PrimaryButton onPress={nextGuessNumber.bind(this,'higher')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessNumber.bind(this,'lower')}>-</PrimaryButton>
            </View>
        </View>
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