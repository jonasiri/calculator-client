import React from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Calculator />
      <ToastContainer />
    </div>
  );
}

export default App;
