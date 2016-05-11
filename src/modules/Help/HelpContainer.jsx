import React, { Component, PropTypes } from 'react';
import { Page } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
};

class HelpContainer extends Component {

  componentWillMount() {}

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar />
        </Page.Header.Default>
        <Page.Content >
          <h1>Help Module</h1>
        </Page.Content >
      </Page.Default>
    );
  }
}

HelpContainer.propTypes = propTypes;

export default HelpContainer;
