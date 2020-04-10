import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = (props) => {
  const {
    profile: {
      user: { _id, name, avatar },
      location,
      pet,
    },
  } = props;

  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>Owner of {pet.length} pets</p>
        <p className="my-1">
          <span>{location}</span>
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {pet.slice(0, 4).map((_pet, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-paw"> {_pet.name}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
