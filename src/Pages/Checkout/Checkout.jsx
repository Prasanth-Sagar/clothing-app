import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItems from '../../Components/CheckoutItems/CheckoutItems';
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/CartSelectors';

import './checkout.scss';

const Checkout = ({ cartItems, cartTotal, dispatch }) => {
  // console.log('DISPATCH IS ', dispatch);
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      { cartItems.map(cartItem =>  <CheckoutItems key={cartItem.id} cartItem={cartItem} />) }

      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);