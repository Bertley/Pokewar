import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
// import { Provider } from 'react-redux';
// import store from '../../store'; 

class App extends Component {
    render() {
        return (
            <h1>They are fighting again</h1>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#fight')); 