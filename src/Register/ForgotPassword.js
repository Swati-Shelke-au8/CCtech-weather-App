import React from "react";
import "../Login/Login.css";

function ForgotPassword() {
  return (
    <div className="LoginPage">
      <div className="card">
        <div className="card-header">
          <h1>Forgot Password</h1>
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
                  id="validationCustomUsernameEmail"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <br />
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
