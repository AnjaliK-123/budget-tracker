import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/registration';
import BudgetEntry from './pages/budgetEntry';
import Login from './pages/Login';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/budget" element={<BudgetEntry/>} />
        {/* <Route path="/" component={Home} />   */}
      </Routes>
   </Router>
  );
}

export default App;
