import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../contetx/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
