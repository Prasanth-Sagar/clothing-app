import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        {/* <Route path='/hats' component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
