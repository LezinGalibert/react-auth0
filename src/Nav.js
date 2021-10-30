import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout, userHasScope } = this.props.auth;
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Public">Public</Link>
                    </li>
                    {isAuthenticated() && <li>
                        <Link to="/Private">Private</Link>
                    </li>}
                    {isAuthenticated() && userHasScope(["read:courses"]) && <li>
                        <Link to="/Courses">Courses</Link>
                    </li>}
                    <li>
                        <button onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? "Log Out" : "Log In"}
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;