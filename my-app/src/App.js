import React from 'react';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Header from './components/Header/Header';
import Myyoga from './components/Myyoga/Myyoga';
import Classes from './components/Classes/Classes';

function App() {
    return (
        <div className="App">
            <Header />
            <Aboutme />
            <hr />
            <Classes />
            <hr />
            <Myyoga />
        </div>
    );
}

export default App;
