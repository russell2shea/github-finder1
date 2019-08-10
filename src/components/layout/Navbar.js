import React from "react";
// propTypes is used for type checking
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};
// default props over written if passed in
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
