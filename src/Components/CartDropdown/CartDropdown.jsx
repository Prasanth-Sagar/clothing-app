import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelectors';
import { toggleCartHidden } from '../../Redux/Cart/CartAction';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={
        () => { history.push('/checkout');
        dispatch(toggleCartHidden());
        }}
      >GO TO CHECKOUT</CustomButton>
    </div>
  )
}

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// })

// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
