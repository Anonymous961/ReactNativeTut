import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Keyboard,FlatList, TouchableOpacity,Alert,TouchableWithoutFeedback } from 'react-native';
import Header from './components/header';
import Todos from './components/todo';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos,setTodos]=useState([
    {text:"make a coffee",key:1},
    {text:"write a note",key:2},
    {text:"do assignment",key:3},
    {text:"go to class",key:4},
  ]);
  const pressHandler=(key)=>{
    setTodos(()=>{
      return todos.filter(todo=>todo.key!=key)
    })
  }
  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((prevTodo)=>{
        return [{text:text,key:Math.random().toString()},...prevTodo];
      })
    }else{
      Alert.alert('OOPS!',"Todos must be over 3 characters long",[
        {text:"Understood",onPress:()=>console.log("alert closed")}
      ]);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <Todos item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20,
  },
  boldText:{
    fontWeight: "bold"
  },
});
