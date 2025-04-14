import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; // Import Home page component
import SuspectDetail from './pages/SuspectDetail'; // Import SuspectDetail component

function App() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suspect/:id" element={<SuspectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
