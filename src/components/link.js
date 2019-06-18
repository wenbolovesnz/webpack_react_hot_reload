import React from "react";
import PropTypes from "prop-types";
const Link = ({ text, address }) => {
  return <a href={address}>{text}</a>;
};

Link.propTypes = {
  text: PropTypes.string,
  address: PropTypes.string
};

export default Link;
