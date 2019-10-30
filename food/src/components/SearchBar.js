import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ inputProps }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        {...inputProps}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        placeholderTextColor='black'
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
export default SearchBar;
