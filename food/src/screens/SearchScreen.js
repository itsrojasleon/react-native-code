import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useTextInput } from '../hooks/useTextInput';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [searchApi, results, errorMessage] = useResults();
  const { inputProps } = useTextInput('', searchApi);

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <>
      <SearchBar inputProps={inputProps} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
