import {Text,StyleSheet} from 'react-native'


function Title({children}){
    return <Text style={styles.text}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontFamily:'open-sans-bold',
        fontSize:24,
        // fontWeight:'bold',
        borderColor:"white",
        borderWidth:2,
        padding:12,
        textAlign:'center',

    }
})