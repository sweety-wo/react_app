import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// PropTypes
const propTypes = {
  locator: PropTypes.string,
  workspaceId: PropTypes.string,
  active: PropTypes.string,
};

function WorkspaceTabNav(props) {
  let wsActive;
  let dashActive;
  let appActive;
  if (props.active === 'wsActive') {
    wsActive = 'active';
  }
  if (props.active === 'dashActive') {
    dashActive = 'active';
  }
  if (props.active === 'appActive') {
    appActive = 'active';
  }
  return (
    <ul className="nav navbar-nav element-active-vs-navy">
      <li className={wsActive}>
        <Link to={`/${props.locator}/workspaces/${props.workspaceId}`}>
          <i className="icon-display position-left"></i> Profile
        </Link>
      </li>
      <li className={dashActive}>
        <Link to={`/${props.locator}/workspaces/${props.workspaceId}/dashboard`}>
          <i className="icon-pie-chart6 position-left"></i> Dashboard
        </Link>
      </li>
      <li className={appActive}>
        <Link to={`/${props.locator}/workspaces/${props.workspaceId}/appStore`}>
          <i className="icon-menu7 position-left"></i> App Store
        </Link>
      </li>
    </ul>
  );
}

WorkspaceTabNav.propTypes = propTypes;

export default WorkspaceTabNav;
