import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPost, setBlogPost] = useState([]);

  const addBlogPost = () => {
    setBlogPost([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
