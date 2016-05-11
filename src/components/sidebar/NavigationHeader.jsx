import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function NavigationHeader(props) {
  return (
    <li className="navigation-header">
      <span>{props.children}</span>
    </li>
  );
}

NavigationHeader.propTypes = propTypes;

export default NavigationHeader;
