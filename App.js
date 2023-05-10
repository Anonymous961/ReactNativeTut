import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople]=useState([
    {name:'mario',key:1},
    {name:'Anil',key:2},
    {name:'Shaun',key:3},
    {name:'Luigi',key:4},
    {name:'tiger',key:5},
    {name:'Ansooman',key:6},
    {name:'Anubhab',key:7},
    {name:'Sritam',key:8},
    {name:'Nitin',key:9},
    {name:'Santosh',key:10},
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item=>
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:30,
    backgroundColor:"pink",
    fontSize:24,
    padding:30
  },
  input:{
    borderWidth: 1,
    width: 200,
    padding:6,
    borderColor: '#777',
    margin:20
  },
  buttonContainer:{
    marginTop: 20
  },
  header:{
    backgroundColor:"pink",
    padding:30
  },
  boldText:{
    fontWeight: "bold"
  },
  body:{
    backgroundColor:"yellow",
    padding:20
  }
});
