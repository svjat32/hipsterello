/**
 * Created by admin on 14.07.2017.
 */
import api from '../../api/api.js'

export const GET_LIST = 'GET_LIST';

export function getList(request) {
    return {
        type: GET_LIST,
        payload: api.loadList(request)
    }
}