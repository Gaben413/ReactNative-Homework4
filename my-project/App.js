import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {

  const [text1, setText1] = useState('Empty')
  const [text2, setText2] = useState('24')
  const [_bool, setBool] = useState(false)

  return (
    <View style={styles.container}>
      
      <Text style={styles.titleLogin}>Login</Text>

      <View style={styles.innerContainer}>
        <Ionicons name="ios-mail" size={20} color="#000" />
        <TextInput
          style={styles.input}
          onChangeText={setText1}
          placeholder='Enter your email'
        />
      </View>
      
      <View style={styles.innerContainer}>
        <Ionicons name="key" size={20} color="#000" />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setText2}
          placeholder='Enter your password'
        />
      </View>

      <View style={styles.buttonView}>
        <Button title='LOGIN' color='#fc8632' />
      </View>
      

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
  titleLogin:
  {
    fontSize: 15,
  },
  innerContainer:
  {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    width: '85%',
    borderWidth: 2,
    borderRadius: 15,
    paddingLeft: 5,
    margin: 10,

  },
  input:{
    minWidth: 200,
    minHeight: 50,
    paddingLeft: 5,
  },
  button:
  {
    width: 500,
  },
  buttonView:
  {
    width: '50%',

    alignItems: 'stretch'
  }
});
