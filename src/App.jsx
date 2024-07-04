import React from 'react';

function Blog() {
  return (
    <div>
<h1>
  <span style={{ fontSize: '0.8em', fontWeight: '300' }}>Welcome to  </span>
  <b style={{
    fontSize: '1.2em',
    fontWeight: '600',
    background: 'linear-gradient(to right, #ff0099, #493240)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>Vylara</b>
  
</h1>

      <h2>A Sample Blog Post</h2>
      <p>This is a sample blog post. You can edit this text and add more content to make it your own.</p>
      <h2>Vite + React Demo</h2>
      <p>Below is a demo of a Vite + React application:</p>
     
      <h2>More Content</h2>
      <p>Edit this text and add more content to make it your own.</p>
    </div>
  );
}

export default Blog;
