import React, { useContext } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { useController } from 'react-hook-form';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
  <header>
    <h1>Header</h1>
    <nav>
      {!auth.user &&<Link to = "/login">Login</Link>}
      {!auth.user &&<Link to = "/register">Register</Link>}
      {auth.user &&<Link to = "/private">Private</Link>}
      
    </nav>
    <hr />
    <Routes>
      <Route path = "/" element={<RequireAuth><Private/></RequireAuth>}/>
      <Route path = "/register" element={<Register />}/>
      <Route path = "/login" element={<Login />}/>
    </Routes>
  </header>
    </div>
  );
}

export default App;
