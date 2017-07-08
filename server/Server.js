/**
 * Created by @nikitalpopov on 06/07/2017.
 */

import express from 'express';
import cors from 'cors';
import bp from 'body-parser';

import { serverPort } from '../src/config.json';

import * as db from './database/DataBaseUtils';

const app = express();

db.setUpConnection();

app.use( bp.json() );

app.use( cors({ origin: '*' }) );

app.post('/login', (req, res) => {
    // Doesn't work because findByEmail() in db.findUser() is not correct
    console.log('post login');
    db.createUser(req.body);
    // if (db.findUser(req.body) === null) {
    //     console.log('  user not found \n  create new user');
    // }
    // console.log('findUser');
    // db.findUser(req.body).then(data => res.send(data));
});

app.post('/boards', (req, res) => {
    console.log('findBoards');
    db.findBoards(req.body).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});
