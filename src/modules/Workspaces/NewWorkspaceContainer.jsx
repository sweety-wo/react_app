import React, { Component, PropTypes } from 'react';
import { Page, Form } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  workspace: PropTypes.object,
};

class NewWorkspaceContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.initConnectors = props.actions.initConnectors;
    this.initWorkspace = this.props.actions.initWorkspace;
    this.deleteWorkspace = props.actions.deleteWorkspace;
    this.createWorkspace = props.actions.createWorkspace;
    this.updateWorkspace = props.actions.updateWorkspace;
    this.testWorkspace = props.actions.testWorkspace;
    this.props.workspace.locator = '';
  }
  componentWillMount() {
    this.initConnectors({});
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.updateWorkspaceLocator = this.updateWorkspaceLocator.bind(this);
    this.handleCreateWorkspace = this.handleCreateWorkspace.bind(this);
    this.handleTestWorkspace = this.handleTestWorkspace.bind(this);
  }
  updateWorkspaceLocator(event) {
    this.props.workspace.locator = event.target.value;
    this.setState({ showResults: true });
  }

  handleCreateWorkspace(event) {
    event.preventDefault();

    const data = {
      name: this.props.workspace.name,
      locator: this.props.workspace.locator,
    };
    this.createWorkspace(data);
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

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar />
        </Page.Header.Default>
        <Page.Content >
          <h1>Create New Workspace</h1>

          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-9">
              <div className="panel panel-flat">
                <div className="panel-heading">
                  <h5 className="panel-title">{this.props.workspace.name}</h5>
                </div>
                <div className="panel-body">

                  <form className="form-horizontal">

                    <div className="form-group">
                      <label className="control-label col-md-3">Workspace Locator</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={this.props.workspace.locator}
                          placeholder="Workspace Locator"
                          onChange={this.updateWorkspaceLocator}
                        />
                      </div>
                    </div>

                    <Form.WorkspaceForm workspace={this.props.workspace}
                      action={this.handleCreateWorkspace}
                    />

                  </form>
                </div>
              </div>
            </div>
          </div>

        </Page.Content >
      </Page.Default>
    );
  }
}

NewWorkspaceContainer.propTypes = propTypes;

export default NewWorkspaceContainer;
