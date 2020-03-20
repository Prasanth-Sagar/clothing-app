import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../Redux/Cart/CartAction';
import { selectCartItemsCount } from '../../Redux/Cart/CartSelectors';

import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
      <span className='item-count'>{ itemCount }</span>
    </div>
  )
}

// const mapStateToProps = state => {console.log('mapstatetoprops called'); return{
//   itemCount: state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
// }}

// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);