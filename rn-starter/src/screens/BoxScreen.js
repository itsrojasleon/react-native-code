import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'flex-start'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20
    margin: 20
  }
});

export default BoxScreen;
