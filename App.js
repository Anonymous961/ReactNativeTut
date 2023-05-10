import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people,setPeople]=useState([
    {name:'mario',id:1},
    {name:'Anil',id:2},
    {name:'Shaun',id:3},
    {name:'Luigi',id:4},
    {name:'tiger',id:5},
    {name:'Ansooman',id:6},
    {name:'Anubhab',id:7},
    {name:'Sritam',id:8},
    {name:'Nitin',id:9},
    {name:'Santosh',id:10},
  ]);
  const pressHandeler = (id)=>{
    console.log(id);
    setPeople((prevPeople)=>{
      return people.filter((people)=>people.id!=id);
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandeler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(item=>
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      </ScrollView> */}
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
    padding:30,
    marginHorizontal:10,
    marginTop:24
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
