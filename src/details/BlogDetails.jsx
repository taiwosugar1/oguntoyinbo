import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import "./Blog.css"
import GoBackButton from './GoBackButton';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find(post => post.id === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      
          < GoBackButton/>
    
    </div>
  );
};

export default BlogDetails;
