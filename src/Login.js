import React, { useState } from 'react';
// import { useCounter } from './hooks';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
// import Dashboard from "./Dashboard";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState('');
  // const [timeLeft, startTimer] = useCounter(30);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user and password
    if (email !== 'admin' || password !== 'password') {
      setError('Invalid email or password.');
    } else {
      // Successful login
      setError('');
      // alert('Welcome, admin!');
      // navigate('./Dashboard', { replace: true });
    }
  };

  function onChange(value) {
    // setCaptchaValue(value);
  }

  return (
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center  align-items-center">
          <div class="col-5">
            <div class="card border-0 mt-auto">
              <div class="card-body p-4 p-sm-5">
                <h4 class="text-center fw-light mt-5"><a>Login</a></h4>
                <form onSubmit={handleSubmit}>
                  <div class="mb-4">
                    <label for="inpEmail" class="form-label fw-light">Email address</label>
                    <input type="email" class="form-control" id="inpEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="mb-4">
                    <label for="inpPassword" class="form-label fw-light">Password</label>
                    <input type="password" class="form-control" id="inpPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="mb-5">
                    <h6 class="fw-light fs-7"><a><u>Forgot your password</u></a></h6>
                  </div>
                  <div class="d-grid">
                    {error && <div className="alert alert-danger p-2" role="alert">{error} </div>}
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary btn-login btn-submit" type="submit">Log in</button>
                  </div>
                  <div class="d-grid mb-4 mt-4">
                    <h6 class="text-center fw-light txt-signup fs-6">Don't have an account? <button class="btn btn-link" onClick={() => navigate('/signup')}>Sign up</button></h6>
                  </div>
                  <div class="mt-5 p-3">
                    <h6 class="fw-light text-center txt-captcha">This site is protected by reCAPTCHA and the Google <u>Privacy Policy</u> and <u>Terms of Service</u> apply.</h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;