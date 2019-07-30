import React, { Component } from 'react';
import './Aboutme.css';

class aboutme extends Component {
    render() {
        return (
            <div className="aboutme">
                <h2>About me</h2>
                <div className="card-aboutme">
                    <ul>
                        <li>
                            <img src="" alt="profil-pic" />
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor sit amet.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default aboutme;
