import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function Header(props) {
  return (
    <div className="page-header page-header-xs">{ props.children }</div>
  );
}

Header.propTypes = propTypes;

export default Header;
