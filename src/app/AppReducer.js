/**
 * Created by @nikitalpopov on 11/07/2017.
 */

import { combineReducers } from 'redux';

import AuthReducer from '../auth/AuthReducer';
import BoardsReducer from '../entities/board/BoardsReducer';

const appReducer = combineReducers({
    auth: AuthReducer,
    boards: BoardsReducer
});

export default appReducer;
