import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react"
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Empty')
  const [age, setAge] = useState('24')
  const [_bool, setBool] = useState(false)

  return (
    <View style={styles.container}>
      
      <Text>Digite um nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder='Text'
        value={name}
      />

      <Text>Digite a idade:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        onChangeText={setAge}
        placeholder='Text'
        value={age}
      />

      {
        _bool ?
          <Button 
            title='Remover Texto'
            onPress={() => setBool(false)}
          />
          :
          <Button 
            title='Apresentar Texto'
            onPress={() => setBool(true)}
          />
      }
      

      {
        _bool ?
        <Text>Nome: {name} e idade: {age}</Text>
        :
        <Text></Text>
      }

      <StatusBar style="auto" />
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
    minWidth: 200,
    minHeight: 50,
    paddingLeft: 10,
    borderWidth: 2,
    margin: 10,
  }
});
