import React, { useState } from 'react';

const Test = () => {
  const [message, setMessage] = useState('Welcome to the Test Component!');

  const handleClick = () => {
    setMessage('The button was clicked!');
  };

  return (
    <div className="test-container">
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Test;
