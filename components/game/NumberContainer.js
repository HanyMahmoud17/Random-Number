import { Text,View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
// import { } from "react-native";

function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )

}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        margin:24,
        padding:24,
        // textAlign:'center',


    },
    numberText:{
        fontWeight:'bold',
        fontSize:35,
        color:Colors.accent500,
        textAlign:'center',
    }

})