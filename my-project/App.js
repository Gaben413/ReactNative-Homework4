import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react"
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState('Empty')

  return (
    <View style={styles.container}>
      
      <Text>Digite um nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder='Text'
        value={text}
      />

      <Text>Digite a idade:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        onChangeText={setText}
        placeholder='Text'
        value={text}
      />

      <Button 
        title='Apresentar Texto'
      />

      {
        text === 'Ligado' ?
        <Text>Apresentando Texto</Text>
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
});
