import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { auth } from '../../Firebase/firebase.utils';

import SignIn from '../SignIn/SignIn';

import { ReactComponent as Logo } from '../../Assets/crown.svg';

import './header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/shop'>CONTACT</Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to='/SignIn'>SIGN IN</Link>
        }
      </div>
    </div>
  )
}

// This state in argument is the root reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);