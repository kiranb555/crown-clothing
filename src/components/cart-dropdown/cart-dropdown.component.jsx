import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import { CartDropDownHolder, CartItemHolder, EmptyMessageHolder} from './cart-dropdown.styles.jsx';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownHolder>
    <CartItemHolder>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      ) : (
        <EmptyMessageHolder>Your cart is empty</EmptyMessageHolder>
      )}
    </CartItemHolder>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropDownHolder>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
