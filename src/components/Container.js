import React, { Component } from 'react';
import "./Container.css";

export default class Container extends Component {
    render() {
        return (

            <div className="grid-container">
                <div className="header">
                    <a href="/">FLIPKART</a>
                </div>
                <div className="main">
                    <div className="mainContent">
                        MAIN CONTENT
                    </div>
                    <div className="sideBar">
                        SIDEBAR
                    </div>
                </div>
                <div className="footer">
                    ALL RIGHTS RESERVED
                </div>

            </div>

            // <div className = "grid-container">
            //     <div className = "header">header</div>
            //     <div className = "menu">menu</div>
            //     <div className = "footer">footer</div>
                
            // </div>


        )
    }
}


