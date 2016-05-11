import React, { Component, PropTypes } from 'react';
import { Page } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
};

class DashboardContainer extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Navbar />
        </Page.Header>
        <Page.Content >
          <h1>Dashboard Module</h1>
        </Page.Content >
      </Page.Default>
    );
  }
}

DashboardContainer.propTypes = propTypes;

export default DashboardContainer;
