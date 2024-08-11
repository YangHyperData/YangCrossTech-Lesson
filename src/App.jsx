import React from 'react';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Content />
    </div>
  );
};

export default App;
