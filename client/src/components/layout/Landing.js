import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Landing(props) {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Pet Connector</h1>
          <p className="lead">
            Join the pet owners community, <br />
            share your knowledge and get help from the others!
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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
