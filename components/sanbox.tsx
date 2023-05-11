import {View,Text,StyleSheet} from 'react-native';
const Sandbox = () => {
    return ( 
        <View style={styles.container}> 
            <Text style={styles.one}>one</Text>
            <Text style={styles.two}>two</Text>
            <Text style={styles.three}>Three</Text>
            <Text style={styles.four}>four</Text>
        </View>
     );
}
 
export default Sandbox;

const styles=StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:"space-around",
        alignItems:"flex-end",
        flexDirection:'row',
        backgroundColor:"#ddd",
        paddingTop:40
    },
    one:{
        flex:2,
        padding:10,
        backgroundColor:"violet",
    },
    two:{
        flex:1,
        padding:20,
        backgroundColor:"coral",
    },
    three:{
        flex:1,
        padding:30,
        backgroundColor:"gold",
    },
    four:{
        flex:1,
        padding:40,
        backgroundColor:"lightblue",
    }
})