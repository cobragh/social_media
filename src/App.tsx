import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
  <header>
    <h1>Header</h1>
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/login">Login</Link>
      <Link to = "/register">Register</Link>
      <Link to = "/private">Private</Link>
    </nav>
    <hr />
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path = "/private" element={<RequireAuth><Private/></RequireAuth>}/>
      <Route path = "/register" element={<Register />}/>
      <Route path = "/login" element={<Login />}/>
    </Routes>
  </header>
    </div>
  );
}

export default App;
