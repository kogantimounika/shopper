import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import history from '../history';


class LogIn extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange() {
        let path = `../Container`;
        history.push(path);
    }
    render() {
        return (
            <div>
                LOGIN INFO
                <br></br>
                <input type="text"></input>
                <br></br>
                <button onClick={this.routeChange}>SUBMIT</button>
            </div>
        );
    }
}

export default withRouter(LogIn);