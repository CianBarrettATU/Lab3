import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      //displays current time and converts to a string
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;
