import './App.css';
import React from "react";
import { Router, Route, Routes, Link } from "react-router-dom";
import Hello from './components/Hello';
import Login from './components/Login';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Hello />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    );
  }
}
export default App;