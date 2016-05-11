import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Page, Form, Navbar } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  initialized: PropTypes.bool,
  workspace: PropTypes.object,
  connectors: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.object,

};

class WorkspaceContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.initConnectors = props.actions.initConnectors;
    this.initWorkspace = this.props.actions.initWorkspace;
    this.deleteWorkspace = props.actions.deleteWorkspace;
    this.updateWorkspace = props.actions.updateWorkspace;
    this.testWorkspace = props.actions.testWorkspace;
    this.props.workspace.locator = '';
  }

  componentWillMount() {
    this.initWorkspace(this.props.params.id);
    this.initConnectors({});
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.handleUpdateWorkspace = this.handleUpdateWorkspace.bind(this);
    this.handleTestWorkspace = this.handleTestWorkspace.bind(this);
    this.handleDeleteWorkspace = this.handleDeleteWorkspace.bind(this);
  }

  handleUpdateWorkspace(event) {
    event.preventDefault();

    const data = {
      name: this.props.workspace.name,
      connectors: this.props.workspace.connectors,
      domain: this.props.workspace.domain,
      locator: this.props.workspace.locator,
      baseDn: this.props.workspace.baseDn,
      vmBaseDn: this.props.workspace.vmBaseDn,
      username: this.props.workspace.username,
      password: this.props.workspace.password,
    };

    this.updateWorkspace(this.props.workspace.id, data);
    this.redirect(`/${this.locator}/workspaces`);
  }

  handleTestWorkspace(event) {
    event.preventDefault();

    const data = {
      id: this.props.workspace.id,
      name: this.props.workspace.name,
      connectors: this.props.workspace.connectors,
      domain: this.props.workspace.domain,
      locator: this.props.workspace.locator,
      baseDn: this.props.workspace.baseDn,
      vmBaseDn: this.props.workspace.vmBaseDn,
      username: this.props.workspace.username,
      password: this.props.workspace.password,
    };

    this.testWorkspace(this.props.workspace.id, data);
  }

  handleDeleteWorkspace(event) {
    event.preventDefault();

    this.deleteWorkspace(this.props.workspace.id);
    this.redirect(`/${this.locator}/workspaces`);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs>
            <li className="active"><Link to={`/${this.locator}/workspaces`}>Workspaces</Link></li>
          </Page.Header.Breadcrumbs>
          <Page.Header.Title>
            {this.props.workspace.name}
          </Page.Header.Title>
          <Page.Header.Navbar>

            <Navbar.WorkspaceTabNav locator={this.props.params.locator}
              workspaceId={this.props.workspace.id}
              active="wsActive"
    />

            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteWorkspace}
            >
            <b><i className="icon-minus3" /></b>Delete Workspace
            </button>
          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content>
          <div className="row">
            <div className="col-md-3">
              <div className="thumbnail">
                <div className="thumb">
                  <img src={`/api/v1/files/ws/${this.props.workspace.id}/avatar`} role="presentation" />
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="panel panel-flat">
                <div className="panel-heading">
                  <h5 className="panel-title">{this.props.workspace.name}</h5>
                </div>
                <div className="panel-body">

                  <form className="form-horizontal">

                    <Form.WorkspaceForm workspace={this.props.workspace}
                      action={this.handleUpdateWorkspace}
                      testWorkspace={this.handleTestWorkspace}
                    />

                  </form>
                </div>
              </div>
            </div>
          </div>
        </Page.Content>
      </Page.Default>
    );
  }
}

WorkspaceContainer.propTypes = propTypes;

export default WorkspaceContainer;
