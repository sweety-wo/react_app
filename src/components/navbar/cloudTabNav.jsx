import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// PropTypes
const propTypes = {
  locator: PropTypes.string,
  cloudId: PropTypes.string,
  active: PropTypes.string,
};

function CloudTabNav(props) {
  let clActive;
  let imActive;
  let tnActive;
  if (props.active === 'cloudActive') {
    clActive = 'active';
  }
  if (props.active === 'imageActive') {
    imActive = 'active';
  }
  if (props.active === 'tenantActive') {
    tnActive = 'active';
  }
  return (
    <ul className="nav navbar-nav element-active-vs-navy">
      <li className={clActive}>
        <Link to={`/${props.locator}/clouds/${props.cloudId}`}>
          <i className="icon-cloud position-left"></i> Profile
        </Link>
      </li>
      <li className={imActive}>
        <Link to={`/${props.locator}/clouds/${props.cloudId}/images`}>
          <i className="icon-database4 position-left"></i> Images
        </Link>
      </li>
      <li className={tnActive}>
        <Link to={`/${props.locator}/clouds/${props.cloudId}/tenants`}>
          <i className="icon-menu7 position-left"></i> Tenants
        </Link>
      </li>
    </ul>
  );
}

CloudTabNav.propTypes = propTypes;

export default CloudTabNav;
