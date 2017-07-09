/**
 * Created by @nikitalpopov on 06/07/2017.
 */

import api from '../api/api.js'

export const LOGIN_USER = 'LOGIN_USER';

export function logInUser(request) {
    let result = api.logInUser(request)
        .then((data) => {
            return data;
        });

    return {
        type: LOGIN_USER,
        payload: result
    }
}
