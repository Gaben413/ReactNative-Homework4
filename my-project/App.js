import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState('Empty')

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder='Text'
        value={text}
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
