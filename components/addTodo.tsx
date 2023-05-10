import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const AddTodo = ({submitHandler}:any) => {
    const [text,setText]=useState('');
    const changeHandler=(val:any)=>{
        setText(val);
    }
    return ( 
        <View>
            <TextInput
                style={styles.input}
                onChangeText={changeHandler}
                placeholder='Add something'
                value={text}
            />
            <Button
                title='Add Todo'
                color='coral'
                onPress={()=>{
                    submitHandler(text);
                    setText('');
                }}
            />
        </View>
     );
}
 
export default AddTodo;

const styles=StyleSheet.create({
    input:{
        width: 200,
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})