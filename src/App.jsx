import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/canHelp" exact component={Home} />
      <Route path="/needHelp" exact component={Home} />
    </BrowserRouter>
  );
};

export default App;
