import React, { Component } from 'react';
import './Myyoga.css';
import Sitting from '../../images/Sitting.jpg';
import Standing from '../../images/Standing.jpg';
import Headstand from '../../images/Headstand.jpg';

class myyoga extends Component {
    render() {
        return (
            <div className="cards">
                <h2>My Yoga</h2>
                <ul className="yogastyle-cards">
                    <li>
                        <img className="pic-sitting" src={Sitting} alt="sitting-pose" />
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua.{' '}
                        </p>
                    </li>
                    <li>
                        <img className="pic-standing" src={Standing} alt="standing-pose" />
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua.{' '}
                        </p>
                    </li>
                    <li>
                        {' '}
                        <img className="pic-headstand" src={Headstand} alt="headstand-pose" />
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua.{' '}
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default myyoga;
