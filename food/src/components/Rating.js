import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Star = ({ selected }) => (
  <View>
    {selected ? (
      <FontAwesome name='star' size={30} style={styles.starSelected} />
    ) : (
      <FontAwesome name='star' size={30} style={styles.star} />
    )}
  </View>
);

const Raiting = ({ totalStars, totalSelected }) => {
  const [starsSelected] = useState(Math.ceil(totalSelected) || 0);

  return (
    <View>
      {Array.from({ length: 5 }).map((n, i) => {
        return <Star key={i} selected={i < starsSelected} />;
      })}
      <Text>
        {starsSelected} of {totalStars} stars
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    color: 'rgb(232,232,232)',
  },
  starSelected: {
    color: 'rgb(255,221,90)',
  },
});

export default Raiting;
