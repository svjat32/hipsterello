/**
 * Created by admin on 14.07.2017.
 */
import api from '../../api/api.js'

export const CREATE_LIST = 'CREATE_LIST';
export const GET_LIST    = 'GET_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export function createList(request) {
    return {
        type: CREATE_LIST,
        payload: api.createList(request)
        }
    }

export function getList(request) {
    return {
        type: GET_LIST,
        payload: api.getList(request._id)
    }
}

export function updateList(request) {
    return {
        type: UPDATE_LIST,
        payload: api.updateList(request)
    }
}
export function deleteList(request) {
    return {
        type: DELETE_LIST,
        payload: api.deleteList(request)
    }
}
