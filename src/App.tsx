import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
  <header>
    <h1>Header</h1>
    <nav>
      <Link to = "/">Home</Link>
      <Link to = "/private">Private</Link>
    </nav>
    <hr />
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path = "/private" element={<RequireAuth><Private/></RequireAuth>}/>
    </Routes>
  </header>
    </div>
  );
}

export default App;
