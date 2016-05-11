import React, { Component, PropTypes } from 'react';
import { Page } from 'components';

// PropType definitions
const propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  permissions: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
};

class PermissionsContainer extends Component {

  constructor(props) {
    super(props);
    this.initPermissions = props.actions.initPermissions;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initPermissions({});
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Permissions
          </Page.Header.Title>
          <Page.Header.Navbar />
        </Page.Header>
        <Page.Content>
          <h1>Permissions Module</h1>
        </Page.Content>
      </Page.Default>
    );
  }
}

PermissionsContainer.propTypes = propTypes;

export default PermissionsContainer;
