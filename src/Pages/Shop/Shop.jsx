import React from 'react'
import { Route } from 'react-router-dom';

import CollectionOverview from '../../Components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';

const Shop = ({ match }) => {
  console.log('MATCH IS ', match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop;