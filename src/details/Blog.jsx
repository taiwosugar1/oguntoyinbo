import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="blog">
      <h3><span style={{color: 'teal'}}>B</span>log</h3>
      <hr />

      <div className="blog-container">
        {/* Blog Post 1 */}
        <div className="blog-box">
          <div className="blog-image blog1"></div>
          <div className="blog-content">
            <h4>My Journey as a Full-Stack Developer</h4>
            <p>From building simple projects to leading a team of developers at Multibrand Digital Services, I share my journey in the tech world.</p>
            <Link to="/blog/my-journey"><button className="read-more-btn">Read More</button></Link>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="blog-box">
          <div className="blog-image blog2"></div>
          <div className="blog-content">
            <h4>The Future of Tech: AI and Web Development</h4>
            <p>Artificial Intelligence is transforming web development. In this post, I discuss key trends and how developers can prepare for the future.</p>
            <Link to="/blog/ai-and-web"><button className="read-more-btn">Read More</button></Link>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="blog-box">
          <div className="blog-image blog3"></div>
          <div className="blog-content">
            <h4>Mastering React.js: Tips and Tricks</h4>
            <p>React.js has become the go-to framework for many developers. Learn my best practices and tips for mastering React.js in this blog post.</p>
            <Link to="/blog/mastering-react"><button className="read-more-btn">Read More</button></Link>
          </div>
        </div>

		{/* Blog Post 4 */}
        <div className="blog-box">
          <div className="blog-image blog2"></div>
          <div className="blog-content">
            <h4>Understanding the Printing Industry in the Digital Age</h4>
            <p>Explore how the printing industry is adapting to digital trends, and how Multibrand Prints is integrating tech solutions to stay competitive.</p>
            <Link to="/blog/printing-industry"><button className="read-more-btn">Read More</button></Link>
          </div>
        </div>

      </div>
	  <br />
	  <br />

      <Link to="/different-animation"><button className="animation-btn">Animations</button></Link>
    </div>
  );
};
