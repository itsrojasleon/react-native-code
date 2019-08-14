import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.OneStyle} />
      <View style={styles.TwoStyle} />
      <View style={styles.ThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black'
  },
  OneStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  TwoStyle: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    position: 'absolute'
  },
  ThreeStyle: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

export default BoxScreen;
