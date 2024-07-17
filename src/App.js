import logo from './logo.svg';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.css';
import Movie from "./Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
                <></>
                <></>
            </Routes>
        </Router>
    );
}

export default App;
