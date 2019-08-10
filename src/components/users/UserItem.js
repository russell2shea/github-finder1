import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "15874441",
    login: "russell2shea",
    avatar_url: "https://avatars3.githubusercontent.com/u/15874441?v=4",
    html_url: "https://github.com/russell2shea"
  };
  render() {
    // destructure so we dont have to use this.state
    const { login, avatar_url, html_url } = this.state;
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
          <a
            href={html_url}
            target="_blank"
            className="btn btn-dark btn-sm my-1"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
