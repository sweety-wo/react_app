import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.node,
};

const contextTypes = {
  router: PropTypes.object,
  locator: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

function HeaderBreadcrumbs(props, context) {
  return (
    <div className="breadcrumb-line">
      <ul className="breadcrumb">
        <li>
          <Link to={`/${context.locator}/dashboard`} >
            <i className="icon-home2 position-left" /> Home
          </Link>
        </li>
        { props.children }
      </ul>
    </div>
  );
}

HeaderBreadcrumbs.propTypes = propTypes;
HeaderBreadcrumbs.contextTypes = contextTypes;

export default HeaderBreadcrumbs;
