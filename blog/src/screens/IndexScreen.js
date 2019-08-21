import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../contetx/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>The value is: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
