import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { addItem } from "../../redux/cart/cart.actions";

import {CollectionItemHolder, CollectionImageHolder,CollectionFooterHolder, CollectionName, CollectionPrice} from './collection-items.style';

const CollectionItems = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemHolder>
      <CollectionImageHolder style={{ backgroundImage: `url(${imageUrl})` }}>
        <CollectionFooterHolder>
          <CollectionName>{name}</CollectionName>
          <CollectionPrice>{price}</CollectionPrice>
        </CollectionFooterHolder>
      </CollectionImageHolder>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </CollectionItemHolder>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItems);
