import React from 'react';
import { connect } from 'react-redux';

import { removeItem, reduceItem, addItem } from '../../Redux/Cart/CartAction';

import './checkout-items.scss';

const CheckoutItems = ({ cartItem, removeItem, reduceItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem);
  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  reduceItem: item => dispatch(reduceItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);