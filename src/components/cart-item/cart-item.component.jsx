import React from "react";
import { CartItemsHolder, CartItemDetails, ItemName} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemsHolder>
    <img src={imageUrl} alt="item" />
    <CartItemDetails>
      <ItemName>{name}</ItemName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartItemDetails>
  </CartItemsHolder>
);

export default CartItem;
