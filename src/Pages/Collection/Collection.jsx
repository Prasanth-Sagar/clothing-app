import React from 'react';
import { connect } from 'react-redux';

import './collection.scss';

import { selectCollection, selectCollections } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/CollectionItem/CollectionItem';

const Collection = ({ collection }) => {
  console.log('COLLECTION --> ', collection);
  return (
    <div className='collection-page'>
      COLLECTION PAGE
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
