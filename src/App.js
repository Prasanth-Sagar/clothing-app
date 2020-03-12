import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path='/' component={Homepage} />
        {/* <Route path='/hats' component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
