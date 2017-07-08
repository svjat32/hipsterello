/**
 * Created by @nikitalpopov on 07/07/2017.
 */
import mongoose from 'mongoose';
import * as db from './DataBaseUtils';

const User = mongoose.model('User');
const Board = mongoose.model('Board');
const List = mongoose.model('List');
const Card = mongoose.model('Card');

it('set ups connection', () => {
    db.setUpConnection();
});

it('creates user', () => {
    const user = ({
        email: `test@mail.com`,
        password: `test`
    });

    db.createUser(user);
});

it('finds user', () => {
    const request = ({
        email: `test@mail.com`,
        password: `test`
    });

    db.createUser(request);

    const user = new User({
        email: `test@mail.com`,
        password: `test`
    });

    expect(db.findUser(request)).toBe(request);
});

it('deletes user', () => {
    const request = ({
        email: `test@mail.com`,
        password: null
    });

    db.deleteUser(request);
});

it('deletes user by id', () => {
    const data = null;

    db.deleteUserById(data);
});

it('creates board', () => {
    // const user = new User({
    //     email: `test@mail.com`,
    //     password: `test`
    // }); // Maybe mock it?

    const request = ({
        userId: null, // db.findUser(user).getId()?
        title: `testTitle`,
        lists: null,
        color: null,
        createdAt: new Date()
    });

    db.createBoard(request);
});

it('finds boards of current user', () => {
    const user = new User({
        email: `test@mail.com`,
        password: `test`
    });

    const request = ({
        userId: null, // db.findUser(user).getId()?
        title: `testTitle`,
        lists: null,
        color: null,
        createdAt: new Date()
    });

    db.createBoard(request); // not correct for test, but should work if previous test passes

    const board = new Board({
        userId: null, // db.findUser(user).getId()?
        title: `testTitle`,
        // lists: [],
        color: null,
        createdAt: new Date()
    });

    expect(db.findBoards(user)).toBe(board);
});

it('finds board by id', () => {
    const data = null;

    db.findBoard(data);
});

it('deletes board', () => {
    const data = null;

    db.deleteBoard(data);
});

it('creates list', () => {
    const request = ({
        boardId: null, // db.findUser(user).getId()?
        title: `testTitle`,
        // cards: [],
        color: null,
        createdAt: new Date()
    });

    db.createList(request);
});

it('finds lists of current board', () => {
    const data = null;

    db.findLists(data);
});

it('finds list by id', () => {
    const data = null;

    db.findList(data);
});

it('deletes list', () => {
    const data = null;

    db.deleteList(data);
});

it('creates card', () => {
    const request = ({
        listId: null,
        title: `testTitle`,
        text: `testText`,
        // cards: [],
        color: null,
        createdAt: new Date()
    });

    db.createCard(request);
});

it('finds cards of current list', () => {
    const data = null;

    db.findCards(data);
});

it('finds card by id', () => {
    const data = null;

    db.findCard(data);
});

it('deletes card', () => {
    const data = null;

    db.deleteCard(data);
});

it('closes connection', () => {
    db.closeConnection();
});
