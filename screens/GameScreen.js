import { View,Text,StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen(){
return (
    <View style={styles.mainContainer}>
        <Title>Opponent's Guess</Title>
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