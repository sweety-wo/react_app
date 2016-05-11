import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// PropTypes
const propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

// Default Props
const defaultProps = {
  isActive: false,
};

function HeaderBreadcrumb(props) {
  return (
    <li className={classNames({ active: props.isActive })}>
      <Link to={props.link}> { props.name }</Link>
    </li>
  );
}

HeaderBreadcrumb.propTypes = propTypes;
HeaderBreadcrumb.defaultProps = defaultProps;

export default HeaderBreadcrumb;
