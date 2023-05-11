import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList, TouchableOpacity } from 'react-native';
const Todos = ({item,pressHandler}:any) => {
    return ( 
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
     );
}
 
export default Todos;

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    }
})