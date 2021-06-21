import { combineReducers } from 'redux';

/**
 * You can import more reducers here
 */
import { LoginReducer } from 'containers/screens/Login/reducer';
export const combinedReducers = combineReducers({
  Login: LoginReducer
});