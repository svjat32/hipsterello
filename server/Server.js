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
    db.findUser({email: req.body.email})
        .then(user => {
            return (user) ? user : db.createUser(req.body);
        })
        .then(data => {
            res.send(data);
        });
});

app.post('/boards', (req, res) => {
    db.findBoards(req.body._id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});
