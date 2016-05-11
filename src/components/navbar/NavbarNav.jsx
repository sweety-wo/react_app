import React, { PropTypes } from 'react';
import classNames from 'classnames';

// PropTypes
const propTypes = {
  children: PropTypes.node,
  left: PropTypes.bool,
};

const defaultProps = {
  left: false,
};

function NavbarNav(props) {
  return (
    <div className="navbar-collapse collapse">
      <ul
        className={
          classNames('nav', 'navbar-nav', {
            'navbar-right': !props.left,
            'navbar-left': props.left,
          })
        }
      >
        { props.children }
      </ul>
    </div>
  );
}

NavbarNav.propTypes = propTypes;
NavbarNav.defaultProps = defaultProps;

export default NavbarNav;
