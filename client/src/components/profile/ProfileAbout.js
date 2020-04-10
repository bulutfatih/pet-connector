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

      {pet?.length > 0 && (
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Pets</h2>
          {pet?.map((_pet, index) => (
            <div key={index}>
              <h3 className="text-dark">{_pet.name}</h3>
              <p>
                {dayjs(_pet.from).format("MMMM YYYY")} -{" "}
                {!_pet.to ? " Now" : dayjs(_pet.to).format("MMMM YYYY")}
              </p>
              <p>
                <strong>Type: </strong>
                {_pet.petType}
              </p>
              <p>
                <strong>Breed: </strong>
                {_pet.breed}
              </p>
              <p>
                <strong>Description: </strong>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                ipsam, sapiente suscipit dicta eius velit amet aspernatur
                asperiores modi quidem expedita fugit.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
