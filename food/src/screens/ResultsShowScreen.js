import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import Raiting from '../components/Rating';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResults] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;
  // console.log(result);
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Raiting totalStars={5} totalSelected={result.rating} />
      <View style={styles.container}>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 350,
    borderRadius: 15,
    marginBottom: 5,
  },
  container: {
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultsShowScreen;
