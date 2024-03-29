import React from "react";
import "./Register.css"; // Import the CSS file

const Register = ({ ElninonChangeRoute }) => {
  return (
    <article
      className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-3 center"
      style={{ color: "white" }}
    >
      <div className="pa4 black-80" style={{ color: "white" }}>
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Name</label>
              <input
                autoComplete="false"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Surname</label>
              <input
                autoComplete="false"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="surname"
                id="surname"
              />
            </div>
            <div className="mt3" style={{ color: "white" }}>
              <label className="db fw6 lh-copy f6">Email</label>
              <input
                autoComplete="false"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3" style={{ color: "white" }}>
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                autoComplete="false"
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              style={{ color: "white" }}
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={() => ElninonChangeRoute("home")}
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="#0"
              className="f5 link dim black db pointer"
              onClick={() => ElninonChangeRoute("SignIn")}
              style={{ color: "white" }}
            >
              Back to Login
            </a>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Register;
