import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from './components/Hello';
import Login from './components/Login';
import Header from './components/Header';
import MainConcept from './components/Main';
import Parent from './components/Context/Parent';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Hello />} />
        <Route path="/header" element={<Header />} />
        <Route path="/main" element={<MainConcept />} />
        <Route path="/child" element={<Parent />} />
      </Routes>
    );
  }
}

export default App;