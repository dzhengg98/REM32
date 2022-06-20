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
        <p>Discover and share incredible photos, gain global exposure, and get paid for your work.</p>
      </div>
    );
  }

  renderLink() {
    return this.props.formType === "login" ? (
      <p class="form-statement">Don't have an account? <Link to="/signup">Sign Up</Link></p>
    ) : (
      <p class="form-statement">Already have an account? <Link to="/login">Log in</Link></p>
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
      <div className="session_form">
        <form onSubmit={this.handleSubmit}>
          {this.showHeader()}
          <label>Username 
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="username"
            />
          </label>

          <label>Password 
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="password"
            />
          </label>
          <ul className="error-color">{this.renderErrors()}</ul>
          <input
            type="submit"
            className = "button"
            value={this.props.formType === "login" ? "Log in" : "Sign up"}
          />
          {this.renderLink()}
        </form>
      </div>
    );
  }
}

export default SessionForm; 