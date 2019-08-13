import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput
        value={name}
        onChangeText={newValue => setName(newValue)}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <Text>My name is {name}</Text>
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
