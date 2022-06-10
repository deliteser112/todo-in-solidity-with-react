import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RenderToDoList from './components/ToDo';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <RenderToDoList />
    </div>
  );
}

export default App;
