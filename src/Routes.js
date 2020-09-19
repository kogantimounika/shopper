import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Payment from "./components/Payment/Payment";
import history from "./components/history";


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router history = {history}>
                    <Switch>
                        <Route path="/Payment" component = {Payment}></Route> 

                        </Switch>
                </Router>
            </div>
        )
    }
}
