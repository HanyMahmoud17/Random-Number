import {Text,StyleSheet} from 'react-native'

function Title({children}){
    return <Text style={styles.text}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    text:{
        color:'#ddb52f',
        fontSize:24,
        fontWeight:'bold',
        borderColor:'#ddb52f',
        borderWidth:2,
        padding:12,
        textAlign:'center',

    }
})