import React, { Component } from 'react';
import './App.css';
import Auth from '../auth/Auth.js';

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            condition: 'LP',
        }
    }

    render() {
        switch (this.state.condition) {
            case 'LP':
                return (
                    <div className="App">
                        <Auth />
                    </div>
                );
            break;

            case 'BRD':
            {
                return(
                    <div className="App">
                        <h1>In Board</h1>
                    </div>);
            }
            break;
        }
    }
}

export default App;
