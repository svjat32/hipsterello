/**
 * Created by @nikitalpopov on 06/07/2017.
 */

import mongoose from 'mongoose';
import config from '../../src/config.json';
import '../entities/user/User.js';
import '../entities/board/Board.js';
import '../entities/list/List.js';
import '../entities/card/Card.js';

const User = mongoose.model('User');
const Board = mongoose.model('Board');
const List = mongoose.model('List');
const Card = mongoose.model('Card');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function closeConnection() {
    mongoose.connection.close();
}

// data === some User
export function findUser(data) {
    return User.findByEmail(data.email);
}

// data === some User
export function createUser(data) {
    const user = new User({
        email: data.email,
        password: data.password
    });

    return user.save();
}

// data === some User
export function deleteUser(data) {
    return User.findByEmail(data.email).remove();
}

// data === some User
export function deleteUserById(data) {
    return User.findById(data.id).remove();
}

// data === some User
export function findBoards(data) {
    return Board.findByUserId(data.userId)
}

// data === some Board
export function findBoard(data) {
    return Board.findById(data.id);
}

// data === some Board
export function createBoard(data) {
    const board = new Board({
        userId: data.userId,
        title: data.title,
        lists: data.lists,
        color: data.color,
        createdAt: new Date()
    });

    return board.save()
}

// data === some Board
export function deleteBoard(data) {
    return Board.findById(data.boardId).remove();
}

// data === some Board
export function findLists(data) {
    return List.findByBoardId(data.id);
}

// data === some List
export function findList(data) {
    return List.findById(data.id);
}

// data === some List
export function createList(data) {
    const list = new List({
        boardId: data.boardId,
        title: data.title,
        cards: data.cards,
        color: data.color,
        createdAt: new Date()
    });

    return list.save()
}

// data === some List
export function deleteList(data) {
    return List.findById(data.listId).remove();
}

// data === some List
export function findCards(data) {
    return Card.findByListId(data.id);
}

// data === some Card
export function findCard(data) {
    return Card.findById(data.id);
}

// data === some Card
export function createCard(data) {
    const card = new Card({
        listId: data.listId,
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return card.save();
}

// data === some Card
export function deleteCard(data) {
    return Card.findById(data.id).remove();
}
