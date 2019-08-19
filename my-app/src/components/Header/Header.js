import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo-plain.png';
class header extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="/">Classes</a>
                        <img className="logo" src={logo} alt="logo" />
                        <a href="/">Contact</a>
                    </li>
                    <div className="placeholder">
                        <h1>Welcome to Mirkarma Yoga</h1>
                        <h3>schön, dass du da bist !</h3>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default header;
