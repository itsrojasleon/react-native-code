import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Img = ({ image, width, height, borderRadius }) => {
  return (
    <View style={[styles.wrapper, { borderRadius }]}>
      <Image source={{ uri: image }} style={{ width, height }} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'red'
  }
});

export default Img;
