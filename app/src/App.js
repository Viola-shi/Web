import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <div className="forms">
        <HomePage />
      </div>
    </div>
  );
}

document.body.className = 'app';

export default App;


