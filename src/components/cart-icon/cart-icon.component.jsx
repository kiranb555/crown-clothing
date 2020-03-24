import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";


import { CartIconHolder,ItemCounterHolder, } from './cart-icon.styles'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconHolder onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCounterHolder className="item-count">{itemCount}</ItemCounterHolder>
    </CartIconHolder>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
