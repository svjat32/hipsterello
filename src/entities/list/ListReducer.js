/**
 * Created by admin on 14.07.2017.
 */
import { GET_LIST } from './ListActions'

export default function(state = {}, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}