import {Text,StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';

function Title({children}){
    return <Text style={styles.text}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        borderColor:"white",
        borderWidth:2,
        padding:12,
        textAlign:'center',

    }
})