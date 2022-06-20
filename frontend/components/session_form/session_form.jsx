import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  showHeader() {
    return this.props.formType === "login" ? (
      <h1>Log in to REM32</h1>
    ) : (
      <div>
        <h1>Join REM32</h1>
        <p>Find, share, and discover amazing photos.</p>
      </div>
    );
  }

  renderLink() {
    return this.props.formType === "login" ? (
      <p>
        Don't have an account? 
        <Link to="/signup">Sign Up</Link>
      </p>
    ) : (
      <p>
        Already have an account? 
        <Link to="/login">Log in</Link>
      </p>
    );
  }

  renderErrors() {
    const errs = this.props.errors.map((err, i) => {
      return <li key={i}>{err}</li>
    })
    return this.props.errors ? errs : "&nbsp;";
  }

  render(){
    return (
      <div>
        {/* session_form */}
        <form onSubmit={this.handleSubmit}>
          {this.showHeader()}
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="username"
            />
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="password"
            />
          </label>
          <ul>{this.renderErrors()}</ul>
          {/* errors */}
          <input
            type="submit"
            value={this.props.formType === "login" ? "Log in" : "Sign up"}
          />
          {/* button */}
          {this.renderLink()}
        </form>
      </div>
    );
  }
}

export default SessionForm; 