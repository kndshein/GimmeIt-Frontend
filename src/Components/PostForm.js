import React from "react";

function PostForm() {
  return (
    <div className="PostForm">
      <form className="form-post">
        <input type="text" placeholder="image url" name="img" />
        <input type="text" placeholder="item name" name="itemName" />
        <input
          className='input-descript'
          type="text"
          placeholder="item description"
          name="itemDescription"
        />
      </form>
      <div className="btn-container">
        <input type="button" className="btn-submit" value="Post" />
        <input type="button" className="btn-cancel" value="Cancel" />
      </div>
    </div>
  );
}

export default PostForm;
