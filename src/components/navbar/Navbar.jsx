import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

const Navbar = (props) => (
  <div id={props.id} className={classNames('navbar', props.className)}>
    { props.children }
  </div>
);

Navbar.propTypes = propTypes;

export default Navbar;
