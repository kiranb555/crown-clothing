import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemHolder,
  CollectionImageHolder,
  CollectionFooterHolder,
  CollectionName,
  CollectionPrice,
  AddButton
} from "./collection-items.style";

const CollectionItems = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemHolder>
      <CollectionImageHolder
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CollectionFooterHolder>
          <CollectionName>{name}</CollectionName>
          <CollectionPrice>{price}</CollectionPrice>
        </CollectionFooterHolder>
      </CollectionImageHolder>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemHolder>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItems);
