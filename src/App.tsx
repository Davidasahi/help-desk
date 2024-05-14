import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import List from './components/list';
import Main from './components/main';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;