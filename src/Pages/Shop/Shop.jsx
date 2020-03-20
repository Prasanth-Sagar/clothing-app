import React from 'react'
import { connect } from 'react-redux';

import CollectionOverview from '../../Components/CollectionsOverview/CollectionsOverview';

const Shop = () => {
  return (
    <div className='shop-page'>
      <CollectionOverview />
    </div>
  )
}

export default Shop;
