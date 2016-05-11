import React, { PropTypes } from 'react';
import { Navbar } from 'components';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

// Default Props
// const defaultProps = {};

function HeaderNavbar(props) {
  return (
    <Navbar className="navbar-xs navbar-default">
      <Navbar.Collapse id="page_header_navbar">
        { props.children }
      </Navbar.Collapse>
    </Navbar>
  );
}

HeaderNavbar.propTypes = propTypes;
// Navbar.defaultProps = defaultProps;

export default HeaderNavbar;
