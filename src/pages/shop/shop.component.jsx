import React, { Component } from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collections-preview/collection-preview.component";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherItems }) => (
          <CollectionPreview key={id} {...otherItems} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
