import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useTextInput } from '../hooks/useTextInput';
import yelp from '../api/yelp';

const SearchScreen = () => {
  // input props will be {value: '', onChangeText: function}
  const { inputProps } = useTextInput('');
  const [results, setResults] = React.useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 5,
        term: inputProps.value,
        location: 'san jose',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar inputProps={inputProps} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};
export default SearchScreen;
