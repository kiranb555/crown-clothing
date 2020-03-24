import React from "react";

import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component.jsx";

import { DirectoryMenu } from './directory.style.jsx';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections
  });

export default connect(mapStateToProps)(Directory);
