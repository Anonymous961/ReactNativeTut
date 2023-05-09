import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('Anil');
  const [val,setVal]=useState('');
  const [people,setPeople]=useState({name:'mario',age:20});
  const handleClick=()=>{
    setName(name=='Anil'?'Ansooman':'Anil');
    setPeople(people.name=="mario"?{name:"luigi",age:21}:{name:'mario',age:20})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
        Hello {name}!
        </Text>
        
        {/* <Text >
        His name is {people.name} ans his age is {people.age}
        </Text>
         */}
      </View>
      <Text>
          Enter Name:{val}
        </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g Anil'
        onChangeText={(val)=>setVal(val)}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleClick} title='Update name'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
