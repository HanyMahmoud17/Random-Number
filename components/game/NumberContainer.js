import { Text,View,StyleSheet,Dimensions } from "react-native";
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

const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        margin:deviceWidth < 380 ? 24 : 36,
        padding:deviceWidth > 380 ? 24 : 36,
        // textAlign:'center',

    },
    numberText:{
        fontWeight:'bold',
        fontSize:deviceWidth > 380 ? 26 : 36,
        color:Colors.accent500,
        textAlign:'center',
    }

})