import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  handlePageToSignup = () => {
    this.props.handlePageToSignup();
  }

  handlePageToBoard = () => {
    this.props.handlePageToBoard();
  }


  render() {
    return (
      <div>
        <h1 className="titleMainpage">GRAVITY</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Log In</h3>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <button type="submit" onClick={this.handlePageToBoard}>Login</button>
        </form>
        <div className='click'>
          <h2>If you don't have an account:</h2>
          <button type="pageToSignup" onClick={this.handlePageToSignup}>Signup</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
