import React from 'react';

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
    // Code for handling sign-up form submission
  }

  render() {
    return (
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
    );
  }
}

export default SignupForm
