import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/tabs';
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <main className="section">
        <div id="app">
        <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;