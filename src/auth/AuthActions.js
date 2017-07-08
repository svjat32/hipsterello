/**
 * Created by @nikitalpopov on 06/07/2017.
 */

import api from '../api/api.js'

import { apiPrefix } from '../config.json'

const AuthActions = {
    logInUser(data) {
        api.logInUser(data)
            .then((data) =>
            this.loadBoards(data))
    },

    loadBoards(data) {
        api.loadBoards(data)
    }
};

export default AuthActions;
