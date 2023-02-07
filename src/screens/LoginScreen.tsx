import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import { Header } from '../components/Header';

export const LoginScreen = () => {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secure, setSecure] = React.useState(true);

  function toggleSecureIcon() {
    setSecure(!secure);
  }
  
  return (
    <React.Fragment>
      <View style={styles.containerTop}>
        {/* <Text style={styles.title}>SPACECRAFT</Text> */}
        <Header title={'SpaceCraft'}></Header>
          <View style={styles.containerContent}>
          <TextInput
          style={styles.input}
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          secureTextEntry={secure}
          onChangeText={text => setPassword(text)}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              icon={secure ? "eye-off" : "eye"}
            />
          }
        />
        <Button style={styles.btn} mode="outlined" onPress={() => console.log('Pressed')}>
          LOGIN
        </Button>
        <Text style={styles.paragraph}>Read Terms and conditions.</Text>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  input: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    margin: 24,
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#794FF2',
    color: '#fff',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#794FF2',
    color: '#fff',
    padding: 50,
  },
  paragraph:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
