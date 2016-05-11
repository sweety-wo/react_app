import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// PropTypes
const propTypes = {
  locator: PropTypes.string,
  active: PropTypes.string,
};

function SettingsTabNav(props) {
  let spActive;
  let ctActive;
  let clActive;
  if (props.active === 'profileActive') {
    spActive = 'active';
  }
  if (props.active === 'certActive') {
    ctActive = 'active';
  }
  if (props.active === 'calendarActive') {
    clActive = 'active';
  }
  return (
    <ul className="nav navbar-nav element-active-vs-navy">
      <li className={spActive}>
        <Link to={`/${props.locator}/settings/profile`}>
          <i className="icon-cloud position-left"></i> Profile
        </Link>
      </li>
      <li className={ctActive}>
        <Link to={`/${props.locator}/settings/certs`}>
          <i className="icon-database4 position-left"></i> Certificates
        </Link>
      </li>
      <li className={clActive}>
        <Link to={`/${props.locator}/settings/calendars`}>
          <i className="icon-menu7 position-left"></i> Resource Calendars
        </Link>
      </li>
    </ul>
  );
}

SettingsTabNav.propTypes = propTypes;

export default SettingsTabNav;
