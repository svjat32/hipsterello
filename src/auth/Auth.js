import React, { Component } from 'react';

 class Auth extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             entered_Email: '',
             entered_Password: '',
             user_Email: 'user',
             user_Password:'user',
         }
     }

    /* login_Button_Click(event){
         if (this.state.entered_Password === this.state.user_Password && this.state.entered_Email === this.state.user_Email){
             console.log('You logged in');
         }
         else{
             console.log('Not correct');
         }
     } */

     handleEmailChange(event) {
         this.setState({entered_Email: event.target.value});
     }
     handlePasswordChange(event){
         this.setState({entered_Password:event.target.value});
     }

     render(){
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
                            <button id="login-button" name="login-button" className="btn btn-info">Login</button>
                        </div>
                    </div>
                        </fieldset>
                    </form>
                </div>
        );
    }
}

export default Auth;
