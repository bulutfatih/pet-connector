import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ProfileAbout = (props) => {
  const {
    pet: { name, to, from, petType, breed, description },
  } = props;

  return (
    <div>
      <h3 className="text-dark">{name}</h3>
      <p>
        {dayjs(from).format("MMMM YYYY")} -{" "}
        {!to ? " Now" : dayjs(to).format("MMMM YYYY")}
      </p>
      <p>
        <strong>Pet Type: </strong> {petType}
      </p>
      <p>
        <strong>Breed: </strong> {breed}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileAbout.propTypes = {
  pet: PropTypes.object.isRequired,
};

export default ProfileAbout;
