import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // console.log('USER is --> ', user);
      // createUserProfileDocument(user)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log('State is --> ', this.state);});
          console.log('State changed', this.state);
        });
      }
      else {
        // If userAuth is null, set current user to null
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SignInSignUp} />
          {/* <Route path='/hats' component={HatsPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
