
import React from 'react';
import './LoginForm.css';
import axios from "axios";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      res: null,
      error: true

    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const signup = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    const signUpAPI = axios.create({
      baseURL: 'http://localhost:3000/users/api',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });

    signUpAPI.post("/signup", signup)
        .then(this.handlePageToLogin)
        .catch(e => {
          console.log(e);
          this.setState({res: e.response.data.message, error: true})
        })
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
            <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}
                   required/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" value={this.state.email}
                   onChange={this.handleChange} required/>
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" value={this.state.password}
                   onChange={this.handleChange} required/>
            {this.state.error ? <div className="errorMessage">{this.state.res}</div> : null}
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
