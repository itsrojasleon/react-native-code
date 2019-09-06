import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [image, setImage] = useState(initialValues.image);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter a title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Title"
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={[styles.input, styles.area]}
        value={content}
        onChangeText={text => setContent(text)}
        multiline={true}
        numberOfLines={10}
        placeholder="Content"
      />
      <Text style={styles.label}>Enter Image</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={text => setImage(text)}
        placeholder="Image Url"
      />
      <Button
        onPress={() => onSubmit(title, content, image)}
        title="Save Blog Post"
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
    image: ''
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 6
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  },
  area: {
    height: 150
  }
});

export default BlogPostForm;
