import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';

export const Blog = () => {
  return (
    <div className="blog">
      <h3><span style={{color: 'teal'}}>B</span>log</h3>
      <hr />
      <br />
      <br />
      <div className="blog-container">
        
          <div className="blog-box" >
          {blogPosts.map((post) => (
            <div className="blog-content" key={post.id}>
              <img src={post.image} alt="" />
              <h4>{post.title}</h4>
              <p>{post.summary}</p>
              <Link to={`/blog/${post.id}`}>
                <button className="read-more-btn">Read More</button>
              </Link>
            </div>
          ))}
          </div>
       
      </div>

      <br />
      <br />

      <Link to="/different-animation">
        <button className="animation-btn">
          Animations
        </button>
      </Link>
    </div>
  );
};
export default Blog;