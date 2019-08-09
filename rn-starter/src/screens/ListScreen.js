import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ListScreen() {
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
    { name: 'Friend #10' }
  ];
  return (
    <View>
      <Text>List Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default ListScreen;
