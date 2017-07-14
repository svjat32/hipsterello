/**
 * Created by admin on 14.07.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList } from './ListActions';

export class List extends Component {
    handleListLoad(event) {
        event.preventDefault();

        getList(this.store.boardId);
    }

    render() {
        this.handleListLoad.bind(this);
        return <div>This is your list:</div>
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getList }, dispatch)
};

export default connect(mapDispatchToProps())(List);
