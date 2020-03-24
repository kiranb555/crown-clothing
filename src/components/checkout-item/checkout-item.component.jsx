import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import {CheckOutItemHolder, ImageContainerHolder,CheckOutName,CheckOutQuantityHolder,CheckOutPrice,RemoveButton} from './checkout-item.styles'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckOutItemHolder>
      <ImageContainerHolder>
        <img alt="item" src={imageUrl}></img>
      </ImageContainerHolder>
      <CheckOutName>{name}</CheckOutName>
      <CheckOutQuantityHolder>
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </CheckOutQuantityHolder>
      <CheckOutPrice>{price}</CheckOutPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>
        &#10006;
      </RemoveButton>
    </CheckOutItemHolder>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
