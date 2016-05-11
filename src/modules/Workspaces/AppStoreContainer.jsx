import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
  workspace: PropTypes.object,
};

class AppStoreContainer extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <Navbar.WorkspaceTabNav locator={this.props.params.locator}
              workspaceId={this.props.workspace.id}
              active="appActive"
            />
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <h1>App Store</h1>
        </Page.Content >
      </Page.Default>
    );
  }
}

AppStoreContainer.propTypes = propTypes;

export default AppStoreContainer;
