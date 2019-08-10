import React, { Component } from "react";
// propTypes is used for type checking
import PropTypes from "prop-types";

export class Navbar extends Component {
  // default props over written if passed in
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
