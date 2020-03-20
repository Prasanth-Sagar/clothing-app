import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.scss';

import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySections } from '../../Redux/Directory/DirectorySelectors';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)
      }
        {/* OR */}
        {/* this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />) */}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

// const mapStateToProps = state => ({
//   sections: state.directory.sections
// });

export default connect(mapStateToProps)(Directory);