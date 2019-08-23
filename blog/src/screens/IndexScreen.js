import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Context } from '../contetx/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    // let ignore = false;
    // if (!ignore)
    getBlogPost();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPost();
    });
    // return () => { ignore = true; };
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
