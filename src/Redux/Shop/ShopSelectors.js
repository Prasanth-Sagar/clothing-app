import { createSelector } from 'reselect';
import Collection from '../../Pages/Collection/Collection';

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// This is being created coz the structure of ShopData has been changed from array to an object
// We used to iterate over collections array in shop page so we are creating one for the same

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectCollections],
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections => collections[collectionUrlParam]
  )
)