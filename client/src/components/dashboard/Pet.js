import React, { Fragment } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { connect } from "react-redux";

const Pet = (props) => {
  const { pet } = props;

  const pets = pet?.map((pt) => (
    <tr key={pt._id}>
      <td>{pt.name}</td>
      <td>{pt.petType}</td>
      <td>
        {dayjs(pt.from).format("DD/MM/YYYY")} -{" "}
        {!pt.to ? " Now" : dayjs(pt.to).format("DD-MM-YYYY")}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Pet Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="hide-sm">Type</th>
            <th className="hide-sm">Year</th>
            <th />
          </tr>
        </thead>
        <tbody>{pets}</tbody>
      </table>
    </Fragment>
  );
};

Pet.propTypes = {
  pet: PropTypes.array.isRequired,
};

export default Pet;
