import React from "react";

function PostForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="image url" name="img" />
        <input type="text" placeholder="item name" name="itemName" />
        <input
          type="text"
          placeholder="item description"
          name="itemDescription"
        />
        <input type="submit" className="btn-submit" placeholder="Post" />
        <input type="submit" className="btn-cancel" placeholder="Cancel" />
      </form>
    </div>
  );
}

export default PostForm;
