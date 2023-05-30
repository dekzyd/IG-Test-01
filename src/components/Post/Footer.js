import PropTypes from "prop-types";
import React from "react";

const Footer = ({ caption, username }) => {
  return (
    <div className="p-4 pt-2 pb-0">
      <span>{caption}</span>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
