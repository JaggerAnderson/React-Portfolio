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
                    <NavLink exact to="/" activeClassName="Nav-Link-Active">
                        Home
                    </NavLink>

                    <NavLink to="/about-me" activeClassName="Nav-Link-Active">
                        About
                    </NavLink>
                    <NavLink to="/Blog" activeClassName="Nav-Link-Active">
                        Blog
                    </NavLink>
                    
                    <NavLink to="/Contact" activeClassName="Nav-Link-Active">
                        Contact
                    </NavLink>

                    {false ? <button>Add Blog</button> : null}
                </div>
                <div className="right-side">JAGGER ANDERSON</div>
            </div>
        );

    }
}