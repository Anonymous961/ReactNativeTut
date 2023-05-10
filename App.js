import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import Todos from './components/todo';

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
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* {to form} */}
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
