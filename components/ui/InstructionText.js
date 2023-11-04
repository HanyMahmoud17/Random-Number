import { StyleSheet,Text } from "react-native";
import Colors from "../../constants/Colors";


function InstructionText({children}){
return (
    <Text style={styles.instructorText}>{children}</Text>
)

}

export default InstructionText;

const styles = StyleSheet.create({
    instructorText:{
        fontSize:24,
        color:Colors.accent500,
        fontFamily:'open-sans',

    }

})