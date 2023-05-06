
import React from 'react';
import './LoginForm.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Check if name is not empty
    if (!this.state.name) {
      alert('Please enter your name.');
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.state.email)) {
      alert('Please enter a valid email.');
      return;
    }

    // Check if password is at least 8 characters long
    if (this.state.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Code for handling sign-up form submission
  }

  handlePageToLogin = () => {
    this.props.handlePageToLogin()
  }

  render() {
    return (
      <div>
        <h1 className="titleMainpage">GRAVITY</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <button type="submit">Sign Up</button>
        </form>

        <div className='click'>
          <button type="pageToLogin" onClick={this.handlePageToLogin}>Back</button>
        </div>
      </div>
    );
  }
}

export default SignupForm;
