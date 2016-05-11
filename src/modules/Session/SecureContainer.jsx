import React, { PropTypes } from 'react';
import { Navbar } from 'components';

// PropTypes
const propTypes = {
  loginProfile: PropTypes.object,
  children: PropTypes.node,
};

function SecureContainer(props) {
  return (
    <div>
      <Navbar id="navbar" className="bg-white border-bottom-grey-300 navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand
            name={props.loginProfile.spName}
            image={props.loginProfile.spLogo}
          />
        </Navbar.Header>
      </Navbar>
      { props.children }
    </div>
  );
}

SecureContainer.propTypes = propTypes;

export default SecureContainer;
