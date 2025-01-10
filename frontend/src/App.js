import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/registration';

// import Login from './pages/login';
// import Budget from './pages/budget';
// import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration/>} />
         {/* <Route path="/login" component={Login} /> */}
        <Route path="/budget" component={Budget} />
        {/* <Route path="/" component={Home} />   */}
      </Routes>
   </Router>
  );
}

export default App;
