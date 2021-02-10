import React from "react";
import PostForm from "../Components/PostForm";

const Post = (props) => {
  return (
    <div>
      <h1 className="posting-title">Post an Item</h1>
      <PostForm handlePost={props.handlePost} />
    </div>
  );
};

export default Post;
