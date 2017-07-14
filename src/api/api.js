/**
 * Created by @nikitalpopov on 07/07/2017.
 */

import axios from 'axios';

import { apiPrefix } from '../config.json'

export default {
    logInUser(data) {
        return axios.post(`${apiPrefix}/login`, data);
    },

    loadBoards(data) {
        return axios.post(`${apiPrefix}/boards`, data);
    },
    loadList(data) {
        return axios.post(`${apiPrefix}/list`, data);
    }
}

