import React from "react";
import "./collection-preview.style.scss";
import CollectionItems from "../collections-items/collection-items.component.jsx";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(({ id, ...restItems }) => (
            <CollectionItems key={id} {...restItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
