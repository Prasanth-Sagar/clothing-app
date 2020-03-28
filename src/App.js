import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import Checkout from './Pages/Checkout/Checkout';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './Firebase/firebase.utils';
import firebase from './Firebase/firebase.utils';
import { setCurrentUser } from './Redux/User/UserAction';
import { selectCurrentUser } from './Redux/User/UserSelectors';
import { selectCollectionForPreview } from './Redux/Shop/ShopSelectors';

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    console.log('SCU --> ', setCurrentUser());
    console.log('FIREBASE -----> ', firebase.firestore().collection('users').doc('Kabx5UsIEEUfx7aUxQhXOn9vQ773'));
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, () => {console.log('State is --> ', this.state);});
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          console.log('State changed', this.state);
        });
      }
      else {
        // If userAuth is null, set current user to null
        setCurrentUser(userAuth);
      }
      addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />) } />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);