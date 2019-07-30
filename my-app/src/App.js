import React from 'react';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';

import Header from './components/Header/Header';
function App() {
    return (
        <div className="App">
            <Header />
            {/*  <div className="placeholder">
                <h1>Welcome to Mirkarma Yoga</h1>
                <h3>schön, dass du da bist !</h3>
            </div> */}
            <Aboutme />
        </div>
    );
}

export default App;
