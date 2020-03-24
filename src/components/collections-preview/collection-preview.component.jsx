import React from "react";
import CollectionItems from "../collections-items/collection-items.component.jsx";

import { CollectionHolder, CollectionHead, PreviewHolder} from './collection-preview.style';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionHolder>
      <CollectionHead>{title.toUpperCase()}</CollectionHead>
      <PreviewHolder>
        {items
          .filter((items, idx) => idx < 4)
          .map(item => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </PreviewHolder>
    </CollectionHolder>
  );
};

export default CollectionPreview;
