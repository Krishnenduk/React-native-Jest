/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 SafeAreaView
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text
} from 'react-native';



const App = () => {

  const [userName, setUsername] = useState('')

  return (
    <SafeAreaView style={styles.sectionContainer} >
      <TextInput
        style={styles.textInput}
        placeholder={'Username'}
        value={userName}
        testID='userName'
        onChangeText={(value) => setUsername(value)}
      />
      {
        /*
        <View style={styles.button}>
        <Button title='OK' color={'#fff'} />
      </View>*/
      }

      <Text>{userName}</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 100,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textInput: {
    backgroundColor: '#d9dadb',
    width: 200,
    padding: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#000',
    marginTop: 20,
    borderRadius: 5,
    padding: 5
  }
});

export default App;
