import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/registration';
import logo from './logo.svg';
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
