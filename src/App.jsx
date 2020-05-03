import React from 'react';
import Home from './components/Home';
import CanHelp from './components/CanHelp';
import NeedHelp from './components/NeedHelp';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Route path="/" exact component={Home} />
        <Route path="/canHelp" exact component={CanHelp} />
        <Route path="/needHelp" exact component={NeedHelp} />
      </div>
    </BrowserRouter>
  );
};

export default App;
