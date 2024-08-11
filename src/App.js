import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Login/>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
