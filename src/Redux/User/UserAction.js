import { UserTypes } from './UserTypes';

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
});