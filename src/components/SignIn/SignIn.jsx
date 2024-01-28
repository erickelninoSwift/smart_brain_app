import React from "react";
import "./SignIn.styles.css"; // Import the CSS file

const Login = ({ ElninonChangeRoute }) => {
  return (
    <article className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
      <div className="pa4 black-80">
        <form
          className="measure"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email</label>
              <input
                autoComplete="false"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
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
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={() => ElninonChangeRoute("home")}
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="#0"
              className="f5 link dim black db"
              onClick={() => ElninonChangeRoute("register")}
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Login;
