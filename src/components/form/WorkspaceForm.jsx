import React, { Component, PropTypes } from 'react';

// PropTypes
const propTypes = {
  workspace: PropTypes.object,
  connectors: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  action: PropTypes.func,
  testWorkspace: PropTypes.func,
};

class WorkspaceForm extends Component {

  constructor(props) {
    super(props);

    this.props.workspace.name = '';
    this.props.workspace.connectors = '';
    this.props.workspace.domain = '';
    this.props.workspace.locator = '';
    this.props.workspace.baseDn = '';
    this.props.workspace.vmBaseDn = '';
    this.props.workspace.username = '';
    this.props.workspace.password = '';
    this.isBaseDnGenerated = false;
    this.maybeToggleBaseDnGenerated();
  }

  componentWillMount() {
    this.bindActionCreators();
  }

  maybeToggleBaseDnGenerated() {
    if (!this.isBaseDnGenerated) {
      this.isBaseDnGenerated = (!Boolean(this.props.workspace.domain) && !Boolean(this.props.workspace.baseDn));
    }
  }

  transformDomainToDn(domain) {
    return (`DC=${domain}`).split('.').join(',DC=').toLowerCase();
  }

  bindActionCreators() {
    this.updateWorkspaceName = this.updateWorkspaceName.bind(this);
    this.updateWorkspaceConnectors = this.updateWorkspaceConnectors.bind(this);
    this.updateWorkspaceDomain = this.updateWorkspaceDomain.bind(this);
    this.updateWorkspaceLocatorUrl = this.updateWorkspaceLocatorUrl.bind(this);
    this.updateWorkspaceBaseDn = this.updateWorkspaceBaseDn.bind(this);
    this.updateWorkspaceVmBaseDn = this.updateWorkspaceVmBaseDn.bind(this);
    this.updateWorkspaceUsername = this.updateWorkspaceUsername.bind(this);
    this.updateWorkspacePassword = this.updateWorkspacePassword.bind(this);
    this.updateWorkspaceLocator = this.updateWorkspaceLocator.bind(this);
  }

  updateWorkspaceName(event) {
    this.props.workspace.name = event.target.value;
  }
  updateWorkspaceConnectors(event) {
    this.props.workspace.connectors = event.target.value;
  }
  updateWorkspaceDomain(event) {
    this.props.workspace.domain = event.target.value;
    this.maybeToggleBaseDnGenerated();
    if (this.isBaseDnGenerated) {
      this.props.workspace.baseDn = '';
      if (this.props.workspace.domain) {
        this.props.workspace.baseDn = this.transformDomainToDn(this.props.workspace.domain);
      }
    }
    this.setState({ showResults: true });
  }
  updateWorkspaceLocatorUrl(event) {
    this.props.workspace.locator = event.target.value;
  }
  updateWorkspaceBaseDn(event) {
    this.props.workspace.baseDn = event.target.value;
    this.isBaseDnGenerated = false;
    this.setState({ showResults: true });
    this.maybeToggleBaseDnGenerated();
  }
  updateWorkspaceVmBaseDn(event) {
    this.props.workspace.vmBaseDn = event.target.value;
  }
  updateWorkspaceUsername(event) {
    this.props.workspace.username = event.target.value;
  }
  updateWorkspacePassword(event) {
    this.props.workspace.password = event.target.value;
  }
  updateWorkspaceLocator(event) {
    this.props.workspace.locator = event.target.value;
    this.setState({ showResults: true });
  }

  render() {
    return (
        <div>
          <div className="form-group">
            <label className="control-label col-md-3">Login Page</label>

            <div className="col-md-9">
              <input
                type="text"
                readOnly="true"
                className="form-control"
                value={this.props.workspace.locator}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3">Name</label>

            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.workspace.name}
                onChange={this.updateWorkspaceName}
                placeholder="Workspace Name"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Connectors</label>

            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.workspace.connectors}
                onChange={this.updateWorkspaceConnectors}
                placeholder="Add Workspace Connectors"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Active Directory DNS Name</label>

            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                value={this.props.workspace.domain}
                onChange={this.updateWorkspaceDomain}
                placeholder="eg. acme.corp"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Active Directory Base DN</label>

            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                value={this.props.workspace.baseDn}
                onChange={this.updateWorkspaceBaseDn}
                placeholder="eg. CN=Schema,CN=Configuration,dc=mydomain,dc=com"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">
              OU for Vertiscale Servers
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.workspace.vmBaseDn}
                onChange={this.updateWorkspaceVmBaseDn}
                placeholder="eg. OU=Vertiscale"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Username</label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.workspace.username}
                onChange={this.updateWorkspaceUsername}
                placeholder="Username (Member of Domain Admins)"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Password</label>
            <div className="col-md-9">
              <input
                type="password"
                className="form-control"
                defaultValue={this.props.workspace.password}
                onChange={this.updateWorkspacePassword}
                placeholder="Password"
              />
            </div>
          </div>

          <button
            className="btn btn-labeled navbar-btn navbar-right btn-success"
            onClick={this.props.action}
          >
            <b><i className="icon-checkmark" /></b> Save
          </button>
          <button
            className="btn navbar-btn navbar-right btn-default btn-labeled"
            onClick={this.props.testWorkspace}
          >
            <b><i className="icon-pulse2" /></b>Test Workspace
          </button>

        </div>
    );
  }
}

WorkspaceForm.propTypes = propTypes;

export default WorkspaceForm;
