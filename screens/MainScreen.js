import { TextInput ,View,StyleSheet} from "react-native";
// import {  } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Alert } from "react-native";
import Colors from "../constants/Colors";


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
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" onChangeText={inputNumberHandler} value={enterdNumber}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )    

}

const styles = StyleSheet.create({
    inputContainer:{
        // flex: 1,
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:Colors.primary800,
        borderRadius:8,
        // this for andriod boxShadow
        elevation:20,
        // this is for ios
        shadowColor:'balck',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        alignItems:'center',
        justifyContent:'center'
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
    }

})

export default MainScreen;

