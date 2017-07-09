/**
 * Created by @nikitalpopov on 11/07/2017.
 */

import api from '../api/api.js'

export const GET_BOARDS = 'GET_BOARDS';

export function getBoards(request) {
    let result = api.loadBoards(request)
        .then((data) => {
            return data;
        })
    ;

    return {
        type: GET_BOARDS,
        payload: result
    }
}
