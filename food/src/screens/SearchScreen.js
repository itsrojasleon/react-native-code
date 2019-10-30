import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import { useTextInput } from '../hooks/useTextInput';
import { useResults } from '../hooks/useResults';

const SearchScreen = () => {
  const [searchApi, results, errorMessage] = useResults();
  const { inputProps } = useTextInput('', searchApi);

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <>
      <SearchBar inputProps={inputProps} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <Text style={styles.found}>
          We have found {results.length}{' '}
          {results.length === 1 ? 'result' : 'results'}.
        </Text>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  found: {
    marginLeft: 15,
    marginBottom: 30,
    color: 'rgb(60, 60, 60)',
  },
});

export default SearchScreen;
