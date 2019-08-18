import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useTextInput } from '../hooks/useTextInput';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  // input props will be {value: '', onChangeText: function}
  const { inputProps } = useTextInput('');
  const [searchApi, results, errorMessage] = useResults();

  // Call searchApi when component
  // is first rendered.   BAD CODE!
  // searchApi('pasta');

  return (
    <View>
      <SearchBar inputProps={inputProps} onTermSubmit={() => searchApi(term)} />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};
export default SearchScreen;
