import React, { Fragment } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ProfileAbout = (props) => {
  const {
    profile: {
      bio,
      pet,
      user: { name },
    },
  } = props;

  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{name.trim().split(" ")[0]}s Bio</h2>
          <p>{bio}</p>
          <div className="line"></div>
        </Fragment>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
