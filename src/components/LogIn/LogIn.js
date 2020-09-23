import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
                <input type = "text"></input>
                <button  onClick={this.routeChange}>SUBMIT</button>
            </div>
        );
    }
}

export default withRouter(LogIn);