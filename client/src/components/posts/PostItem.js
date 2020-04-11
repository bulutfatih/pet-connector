import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { connect } from "react-redux";

const PostItem = (props) => {
  const {
    auth,
    post: { _id, text, name, avatar, user, likes, comments, date },
  } = props;

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on {dayjs(date).format("DD/MM/YYYY")}
        </p>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>
          {likes.length > 0 && <span> {likes.length}</span>}
        </button>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span class="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
