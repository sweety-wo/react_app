import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  linkTo: PropTypes.string,
};

const contextTypes = {
  router: PropTypes.object,
};

function NavigationItem(props, context) {
  return (
    <li className={classNames({ active: context.router.isActive(props.linkTo) })}>
      <Link to={props.linkTo}>
        { props.children }
      </Link>
    </li>
  );
}

NavigationItem.propTypes = propTypes;
NavigationItem.contextTypes = contextTypes;

export default NavigationItem;
