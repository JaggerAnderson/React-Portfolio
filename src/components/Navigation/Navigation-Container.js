import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="Nav-Link-Active">
                            Home
                        </NavLink>
                            </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me" activeClassName="Nav-Link-Active">
                            About
                        </NavLink>
                            </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/Blog" activeClassName="Nav-Link-Active">
                            Blog
                        </NavLink>
                            </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/Contact" activeClassName="Nav-Link-Active">
                            Contact
                        </NavLink>
                            </div>
                </div>
                <div className="right-side">JAGGER ANDERSON</div>
            </div>
        );

    }
}