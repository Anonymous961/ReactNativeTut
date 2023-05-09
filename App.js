import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
        Hello World
        </Text>
      </View>
      <View style={styles.body}>
        <Text>This is just to check body content!</Text>
        <Text>This is just to check body content!</Text>
        <Text>This is just to check body content!</Text>
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
