import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collections from '../../Components/Collections/Collections';
import { selectCollections } from '../../Redux/Shop/ShopSelectors';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <Collections key={id} {...otherCollectionProps} />
      ))
    }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
