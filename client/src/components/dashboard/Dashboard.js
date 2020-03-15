import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";

const Dashboard = props => {
  const { getCurrentProfile, auth, profile } = props;

  const { profile: userProfile, loading } = profile;
  const { user } = auth;

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && userProfile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user?.name}
      </p>
      {userProfile ? (
        <Fragment>User profile will be shown here.</Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some information.</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
