import { StyleSheet, Text, View } from "react-native";
const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
     );
}
 
export default Header;

const styles=StyleSheet.create({
    header:{
        height:100,
        paddingTop:38,
        backgroundColor:'coral'
    },
    title:{
        // marginTop:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize:24
    }
})