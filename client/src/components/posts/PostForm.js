import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = (props) => {
  const { addPost } = props;

  const [text, setText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Spread your knowledge or ask for help...</h3>
      </div>
      <form class="form my-1" onSubmit={submitForm}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
