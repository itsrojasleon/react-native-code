import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Star = ({ selected }) => (
  <View>
    {selected ? (
      <FontAwesome name='star' size={25} style={styles.starSelected} />
    ) : (
      <FontAwesome name='star' size={25} style={styles.star} />
    )}
  </View>
);

const Raiting = ({ totalStars, totalSelected }) => {
  const [starsSelected] = useState(Math.ceil(totalSelected) || 0);

  return (
    <View>
      <View style={styles.container}>
        {Array.from({ length: 5 }).map((n, i) => {
          return <Star key={i} selected={i < starsSelected} />;
        })}
      </View>
      <Text style={styles.text}>
        {starsSelected} of {totalStars} stars
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    color: 'rgb(232,232,232)',
  },
  starSelected: {
    color: 'rgb(255,221,90)',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 3,
    fontWeight: '300',
  },
});

export default Raiting;
