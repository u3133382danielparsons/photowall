import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Photo from "./Photo.js";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        +
      </Link>
      <div className="photoGrid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PhotoWall;
