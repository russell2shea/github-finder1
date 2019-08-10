import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "15874441",
        login: "russell2shea",
        avatar_url: "https://avatars3.githubusercontent.com/u/15874441?v=4",
        html_url: "https://github.com/russell2shea"
      },
      {
        id: "15874441",
        login: "russell2shea",
        avatar_url: "https://avatars3.githubusercontent.com/u/15874441?v=4",
        html_url: "https://github.com/russell2shea"
      },
      {
        id: "15874441",
        login: "russell2shea",
        avatar_url: "https://avatars3.githubusercontent.com/u/15874441?v=4",
        html_url: "https://github.com/russell2shea"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr",
  gridGap: "1rem"
};
export default Users;
