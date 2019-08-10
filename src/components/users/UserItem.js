import React from "react";
import PropTypes from "prop-types";

// destructure so we dont have to use this.state. so instead of props have user: {login ect}
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        atl=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} target="_blank" className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
