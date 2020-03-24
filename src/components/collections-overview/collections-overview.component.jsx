import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collections-preview/collection-preview.component.jsx";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

import { CollectionsOverViewHolder } from  "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverViewHolder>
    {collections.map(({ id, ...otherItems }) => (
      <CollectionPreview key={id} {...otherItems} />
    ))}
  </CollectionsOverViewHolder>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
