import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Todos = ({item,pressHandler}:any) => {
    return ( 
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons name="delete" size={24} color="black" />
            </View>
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
        flexDirection:"row",
        justifyContent:"space-between"
    },
    itemText:{
        marginLeft:10
    }
})