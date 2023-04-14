import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">GRAVITY</h1>
      <div className="forms">
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
