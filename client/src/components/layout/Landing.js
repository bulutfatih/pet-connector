import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Pet Connector</h1>
          <p className="lead">
            Create a profile for your pet, <br />
            share your knowledge and get help from other pet owners
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign up
            </Link>
            <Link to="/login" className="btn btn-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
