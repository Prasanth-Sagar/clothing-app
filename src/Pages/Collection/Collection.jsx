import React from 'react';
import { connect } from 'react-redux';

import './collection.scss';

import { selectCollection } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/CollectionItem/CollectionItem';

const Collection = ({ collection }) => {
  console.log('COLLECTION --> ', collection);
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
      {
        items.map(item => <CollectionItem key={item.id} item={item} addItem />)
      }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);