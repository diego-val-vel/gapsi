import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Container from './components/Container';
import AddProvider from './components/AddProvider';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/container" element={<Container />} />
        <Route path="/add-provider" element={<AddProvider />} />
      </Routes>
    </Router>
  );
}

export default App;
