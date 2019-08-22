import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../contetx/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <Text>Edit title:</Text>
      <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} />
      <Text>Edit content:</Text>
      <TextInput
        value={content}
        onChangeText={newContent => setContent(newContent)}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
