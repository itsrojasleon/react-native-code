import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

function ColorScreen() {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScreen;
