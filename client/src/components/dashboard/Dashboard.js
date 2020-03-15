import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = props => {
  const { getCurrentProfile, auth, profile } = props;

  const { profile: userProfile, loading } = profile;

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && userProfile === null ? (
    <Spinner />
  ) : (
    <Fragment>test</Fragment>
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
