import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter a name</Text>
      <TextInput
        value={name}
        onChangeText={newValue => setName(newValue)}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <Text>My name is {name}</Text>

      <Text>Enter a password</Text>
      <TextInput
        value={password}
        onChangeText={newValue => setPassword(newValue)}
        style={styles.input}
      />
      {password.length < 4 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
