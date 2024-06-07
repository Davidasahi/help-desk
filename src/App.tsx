import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import List from './pages/list';
import Main from './pages/main';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
