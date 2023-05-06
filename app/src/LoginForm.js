import React from 'react';
import './LoginForm.css';
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      res: null,
      error: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password
    }

    const loginAPI = axios.create({
      baseURL: 'http://localhost:8000/users/api',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });

    loginAPI.post("/login", login)
        .then(res => {
          console.log(res)
          this.handlePageToBoard(res.data.id);
        })
        .catch(e => {
          this.setState({res: e.response.data.message, error: true});
        })
  }



  handlePageToSignup = () => {
    this.props.handlePageToSignup();
  }

  handlePageToBoard = (userId) => {
    this.props.handlePageToBoard(userId);
  }


  render() {
    return (
        <div>
          <h1 className="titleMainpage">GRAVITY</h1>
          <form onSubmit={this.handleSubmit}>
            <h3>Log In</h3>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" value={this.state.email}
                   onChange={this.handleChange} required/>
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" value={this.state.password}
                   onChange={this.handleChange} required/>
            {this.state.error ? <div className="errorMessage">{this.state.res}</div> : null}
            <button type="submit">Login</button>

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
