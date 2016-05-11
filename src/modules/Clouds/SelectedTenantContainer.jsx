import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';
//  import { Link } from 'react-router';
import Loader from 'react-loader';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  initialized: PropTypes.bool,
  tenant: PropTypes.object,
  cloud: PropTypes.object,
  params: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

class SelectedTenantContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.initSelectedTenant = this.props.actions.initSelectedTenant;
  }

  componentWillMount() {
    this.initSelectedTenant(this.props.cloud.id, this.props.params.tid);
  }

  handleDeleteTenant(event) {
    event.preventDefault();
    this.deleteTenant(this.props.cloud.id, this.props.tenant.id);
    this.redirect(`/${this.locator}/clouds/${this.props.cloud.id}/images`);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <Navbar.CloudTabNav locator={this.props.params.locator}
              cloudId={this.props.cloud.id}
              active="tenantActive"
            />
            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteTenant}
            >
              <b><i className="icon-minus3" /></b>Delete Tenant
            </button>
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <h1>{this.props.tenant.name}</h1>
          <Loader loaded={this.props.initialized}>
            Add data here
          </Loader>

        </Page.Content >
      </Page.Default>
    );
  }
}

SelectedTenantContainer.propTypes = propTypes;

export default SelectedTenantContainer;
