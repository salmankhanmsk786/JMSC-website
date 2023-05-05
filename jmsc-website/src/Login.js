import React, { useState } from "react";
import "./Login.css"
import { Link, BrowserRouter, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate.push('/');
      })
      .catch(error => alert(error.message))
   

  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate.push('/');
        }
  })
  .catch(error => alert(error.message))
  
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="/assets/images/JMSC2.png" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By Signing in you agree to the JMSC Brand Fashion Conditions of Use &
          Sale. Please see our Privacy Notice
        </p>
        <button onClick={register} className="login_registerButton">
          Create your JMSC account
        </button>
      </div>
    </div>
  )
  }
}

export default Login

