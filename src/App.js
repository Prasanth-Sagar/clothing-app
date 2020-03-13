import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        {/* <Route path='/hats' component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
