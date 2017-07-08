import React, { Component } from 'react';
import AuthActions from './AuthActions.js'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entered_Email: '',
            entered_Password: ''
        };

        // this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ entered_Email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ entered_Password:event.target.value });
    }

    handleButtonClick(event) {
        event.preventDefault();

        const user = ({
            email: this.state.entered_Email,
            password: this.state.entered_Password
        });

        AuthActions.logInUser(user);
        // console.log(user);
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <fieldset>
                        <legend>Form Name</legend>
                        <div className="form-group">
                            <label className="col-md-4 control-label">E-mail</label>
                            <div className="col-md-4">
                                <input id="textinput" onChange={this.handleEmailChange.bind(this)} name="textinput" type="text" placeholder="Enter e-mail" className="form-control input-md" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label">Password</label>
                            <div className="col-md-4">
                                <input id="passwordinput" onChange={this.handlePasswordChange.bind(this)} name="passwordinput" type="password" placeholder="Enter password" className="form-control input-md" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label"></label>
                            <div className="col-md-4">
                                <button id="login-button" name="login-button" className="btn btn-info" onClick={this.handleButtonClick.bind(this)}>Login</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Auth;
