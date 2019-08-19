import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useTextInput } from '../hooks/useTextInput';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchApi, results, errorMessage] = useResults();
  const { inputProps } = useTextInput('', searchApi);

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    // onTermSubmit={() => searchApi(term)}
    <View>
      <SearchBar inputProps={inputProps} />
      {/* {errorMessage && <Text>{errorMessage}</Text>} */}
      <Text>We have found {results.length}</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
