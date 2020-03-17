import { UserAcrionTypes } from './UserActionTypes';

export const setCurrentUser = user => ({
  type: UserAcrionTypes.SET_CURRENT_USER,
  payload: user
});