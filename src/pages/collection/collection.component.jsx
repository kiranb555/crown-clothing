import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItems from "../../components/collections-items/collection-items.component.jsx";
import { CollectionPageHolder, CollectionTitleHolder, CollectionItemsHolder} from './collection.styles.jsx';

const CollectionPage = ({ collection }) => {
  console.log(collection, "match from category page");

  const { title, items } = collection;
  return (
    <CollectionPageHolder>
      <CollectionTitleHolder>{title}</CollectionTitleHolder>
      <CollectionItemsHolder>
        {items.map(item => (
          <CollectionItems key={item.id} item={item}></CollectionItems>
        ))}
      </CollectionItemsHolder>
    </CollectionPageHolder>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
