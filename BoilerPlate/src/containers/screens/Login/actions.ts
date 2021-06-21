/**
 *
 * Login actions
 *
 */

import { LOGIN_REQUEST } from './constants';


export const getLoginDetails = (user: any) => ({
    type: LOGIN_REQUEST,
    payload: user,
});