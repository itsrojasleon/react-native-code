import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { Context } from '../contetx/BlogContext';
import { Feather } from '@expo/vector-icons';
import Img from '../components/Img';

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
                <View style={styles.child}>
                  <Img
                    image={item.image}
                    width={65}
                    height={43}
                    borderRadius={4}
                  />
                  <View style={styles.texts}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>2 min</Text>
                  </View>
                </View>
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
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 15,
    marginLeft: 10
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  texts: {
    flexDirection: 'column',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  time: {
    color: 'rgb(100,100,100)',
    marginTop: 5
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
