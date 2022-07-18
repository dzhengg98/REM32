import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

const SessionForm = (props) => {

  const { 
    errors,
    clearErrors,
    processForm,
    formType,
    demoUserLogin,
  } = props;

  const [state, setState] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    if (errors.length) {
    };
    return () => {
      clearErrors();
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    processForm(state);
  }

  const update = (field) => {
    return (e) => {
      setState({ ...state, [field]: e.currentTarget.value });
    }
  }

  const showHeader = () => {
    return formType === "login" ? (
      <h2 className="auth-header">Log in to REM32</h2>
    ) : (
      <div>
        <h2 className="auth-header">Join REM32</h2>
        <p className="auth-description">Discover and share incredible photos, gain exposure, and get paid for your work.</p>
      </div>
    );
  }

  const renderLink = () => {
    return formType === "login" ? (
      <p className="form-statement">Don't have an account? <Link to="/signup">Sign Up</Link></p>
    ) : (
      <p className="form-statement">Already have an account? <Link to="/login">Log In</Link></p>
    )
  }

  const demoLogin = (e) => {
    e.preventDefault();
    displayUsername();
  }

  const displayUsername = () => {
    let i = 0;
    const demousername = "demoUser";

    const username = setInterval(() => {
      setState({ username: demousername.slice(0, i+1)})

      if (i >= demousername.length - 1) {
        clearInterval(username)
        displayPassword();
      }
      i++;
    }, 150);
  }

  const displayPassword = () => {
    let j = 0;
    const demopassword = "demouser";

    const password = setInterval(() => {
      setState({ password: demopassword.slice(0, j+1)})

      if (j >= demopassword.length - 1) {
        clearInterval(password);
        demoUserLogin({ username: "demoUser", password: "demouser"})
          .then(() => { setState({ username: "", password: "" })})
      }
      j++;
    }, 150);
  }

  const renderDemoLogin = () => {
    return (
      <input type="submit" className="button" onClick={demoLogin} value="Demo User"/>
    )
  }

  return (
    <div className="session_form">
      <form onSubmit={handleSubmit}>
        {showHeader()}


        <label className="auth-label">Username 
          <input
            className="auth-input"
            type="text"
            value={state.username ?? "demoUser"}
            onChange={update("username")}
            />
        </label>

        <label className="auth-label">Password 
          <input
            className="auth-input"
            type="password"
            value={state.password ?? ""} 
            onChange={update("password")}
            />
        </label>

        <div>
          {(errors.map((error, i) => (
            <p className="errors" key={i}>{error}</p>
          )))}
        </div>

        <input
          type="submit"
          className = "button"
          value={formType === "login" ? "Log in" : "Sign up"}
        />
        
        {formType === "login" ? renderDemoLogin() : " "}
        {renderLink()}
      </form>
    </div>    
  )
}

export default SessionForm; 