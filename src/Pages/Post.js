import React from "react";
import PostForm from "../Components/PostForm";

const Post = (props) => {
  if (sessionStorage.getItem("token")) {
    return (
      <div>
        <h1 className="posting-title">Post an Item</h1>
        <PostForm props={props} handlePost={props.handlePost} />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="posting-title">Please Login to Post an Item</h1>
      </div>
    );
  }
};

export default Post;
