import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
  workspace: PropTypes.object,
};

class DashboardContainer extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <Navbar.WorkspaceTabNav locator={this.props.params.locator}
              workspaceId={this.props.workspace.id}
              active="dashActive"
            />
          </Page.Header.Navbar>
          </Page.Header.Default>
        <Page.Content >
          <h1>Workspace Dashboard</h1>
        </Page.Content >
      </Page.Default>
    );
  }
}

DashboardContainer.propTypes = propTypes;

export default DashboardContainer;
