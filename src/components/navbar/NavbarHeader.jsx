import React, { PropTypes } from 'react';
import classNames from 'classnames';

// PropTypes
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Default Props
// const defaultProps = {};

function NavbarHeader(props) {
  return (
    <div className={classNames('navbar-header', props.className)}>{ props.children }</div>
  );
}

NavbarHeader.propTypes = propTypes;

export default NavbarHeader;
