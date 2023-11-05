import { TextInput ,View,StyleSheet, Text} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Alert } from "react-native";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function MainScreen({onPickedNumber}){

    const[enterdNumber,setEnterdNumber]=useState('')
    
    function inputNumberHandler(enterdNumber){
        setEnterdNumber(enterdNumber);
    }

    function resetInputNumber(){
        setEnterdNumber('');
    }
    function confirmInputNumber(){
        const chosenNumnber=parseInt(enterdNumber);

        if(isNaN(chosenNumnber) || chosenNumnber <=0 || chosenNumnber>99){
            Alert.alert('Invalid number','please enter a number between 0 and 99',
            [{text:'Okay',style:'destructive',onPress:resetInputNumber}])
            return;
        }
        // i use the function from gameScreen and 
        onPickedNumber(chosenNumnber);

    }

    return (
        <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" onChangeText={inputNumberHandler} value={enterdNumber}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
    )    

}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop:100,
        alignItems: 'center',
    },
    numberInput:{
        height:50,
        width:50,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        fontWeight:'bold',
        fontSize:32,
        color:Colors.accent500,
        textAlign:'center',
        marginVertical:8
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },

})

export default MainScreen;

