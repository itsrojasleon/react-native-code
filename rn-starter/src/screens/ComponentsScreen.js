import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ComponentsScreen() {
  const name = 'Luis';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is ${name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 20
  }
});
export default ComponentsScreen;
