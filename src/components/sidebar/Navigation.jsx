import React, { PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

// Default Props
// const defaultProps = {};

function Navigation(props) {
  return (
    <ul className="navigation navigation-main navigation-accordion">{ props.children }</ul>
  );
}

Navigation.propTypes = propTypes;
// Navigation.defaultProps = defaultProps;

export default Navigation;
