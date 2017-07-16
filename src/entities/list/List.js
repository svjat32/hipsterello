/**
 * Created by admin on 14.07.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList } from './ListActions';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.getList(this.props.board)
        }
    }

    render() {
        this.handleListLoad.bind(this);
        return <div>This is your list:</div>
    }
}

function mapStateToProps(state) {
    return {
        boardId: state.boards._id,
        list: state.list
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getList }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
