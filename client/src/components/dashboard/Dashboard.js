import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Pet from "./Pet";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = (props) => {
  const { getCurrentProfile, deleteAccount, auth, profile } = props;

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
        <Fragment>
          <DashboardActions />
          <Pet pet={userProfile.pet} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={deleteAccount}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
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
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getCurrentProfile,
  deleteAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
