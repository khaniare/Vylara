import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import Windows from './Windows'; // Example component import
// import Linux from 'src/assets/blog/linux.jsx'; // Example component import
// import iOS from 'src/assets/blog/IOS.jsx'; // Example component import
// import Android from 'src/assets/blog/android.jsx'; // Example component import

function Blog() {
  const [text, setText] = useState(
    <h1>
      <pre> </pre>
      <span style={{ fontSize: '0.8em', fontWeight: '300', color: '#999' }}>
        Welcome to...
        <br />
      </span>
      <b
        style={{
          fontSize: '5em',
          fontWeight: '600',
          background: 'linear-gradient(to right, #b7d8c3, #bdd4c5, #444444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginLeft: '0.5em',
        }}
      >
        Vylara
      </b>
    </h1>
  );

  const handleClick = () => {
    setText(
    
      <p>
      <span style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}>
        Knowing why you're here!
      </span>
    </p>
    
    
    
    
    
    
    );
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div>{text}</div>;
}

export default Blog;
