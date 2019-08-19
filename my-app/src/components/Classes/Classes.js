import React, { Component } from 'react';
import './Classes.css';

class classes extends Component {
    render() {
        return (
            <div>
                <h2>Classes</h2>
                <ul className="timetable">
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                </ul>
            </div>
        );
    }
}

export default classes;
