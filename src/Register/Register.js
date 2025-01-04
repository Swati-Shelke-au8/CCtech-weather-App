import React from "react";
import "../Login/Login.css";

function Register() {
  return (
    <div className="LoginPage">
      <div className="card">
        <div className="card-header">
          <h1>Register</h1>
        </div>
        <div className="card-body">
          <form className="row g-3 needs-validation" novalidate>
            <div className="input-group mb-3">
              <label for="validationCustomUsername" className="form-label">
                Name
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
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
                Email
              </label>
              <div className="input-group has-validation">
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsernameEmail"
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
            <div className="input-group mb-3">
              <label for="validationCustomUsername" className="form-label">
                Confirm Password
              </label>
              <div className="input-group has-validation">
                <input
                  type="password"
                  className="form-control"
                  id="validationCustomConfirmPassword"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <br />
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
            <div className="col-12 forgotPassord">
              <p>
                <a href="/">Already Register</a>
              </p>
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
