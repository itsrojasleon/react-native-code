import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useTextInput } from '../hooks/useTextInput';

const SearchScreen = () => {
  // input props will be {value: '', onChangeText: function}
  const { error, inputProps } = useTextInput('');

  return (
    <View>
      <SearchBar inputProps={inputProps} />
    </View>
  );
};
export default SearchScreen;
