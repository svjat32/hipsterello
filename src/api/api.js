/**
 * Created by @nikitalpopov on 07/07/2017.
 */

import axios from 'axios';

import { apiPrefix } from '../config.json'

export default {
    logInUser(data) {
      return fetch(`${apiPrefix}/login`, {
        headers: {
          'Content-Type': 'application/json'
        },
        accept: 'application/json',
        method: 'post',
        body: JSON.stringify(data)
      }).then((result) => {
        return result.json();
      }).then((result) => {
        return result;
      });
    },

    loadBoards(data) {
        return axios.post(`${apiPrefix}/boards`, data);
    }
}

