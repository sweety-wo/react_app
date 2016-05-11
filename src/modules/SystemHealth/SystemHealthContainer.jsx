import React, { Component, PropTypes } from 'react';
import { Page } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
};

class SystemHealthContainer extends Component {

  componentWillMount() {}

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar />
        </Page.Header.Default>
        <Page.Content>
          <h1>System Health Module</h1>
        </Page.Content>
      </Page.Default>
    );
  }
}

SystemHealthContainer.propTypes = propTypes;

export default SystemHealthContainer;
