import React, { PropTypes } from 'react';
import { uniqueId } from 'lodash';

const propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

const defaultProps = {
  id: uniqueId('navbar_collapse_'),
};

function NavbarCollapse(props) {
  return (
    <div id={props.id} className="navbar-collapse collapse">
      { props.children }
    </div>
  );
}

NavbarCollapse.propTypes = propTypes;
NavbarCollapse.defaultProps = defaultProps;

export default NavbarCollapse;
