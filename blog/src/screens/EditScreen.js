import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../contetx/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{
        title: blogPost.title,
        content: blogPost.content,
        image: blogPost.image
      }}
      onSubmit={(title, content, image) => {
        editBlogPost(id, title, content, image, () => navigation.pop());
      }}
    />
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
