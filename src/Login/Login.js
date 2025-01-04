import "./Login.css";
import React from "react";

function Login() {
  return (
    <div className="LoginPage">
      <div className="card">
        <div className="card-header">
          <h1>Login</h1>
        </div>
        <div className="card-body">
          <form className="row g-3 needs-validation" novalidate>
            <div className="input-group mb-3">
              <label for="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <br />
            <div className="input-group mb-3">
              <label for="validationCustomUsername" className="form-label">
                Password
              </label>
              <div className="input-group has-validation">
                <input
                  type="password"
                  className="form-control"
                  id="validationCustomPassword"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <br />
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div className="col-12 forgotPassord">
              <p>
                <a href="/register" target="">
                  Don't have an account?
                </a>
              </p>
              <p>
                <a href="/forgotPassword">Forgot Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
