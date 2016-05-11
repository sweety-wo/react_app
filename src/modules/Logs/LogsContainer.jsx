import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { Page } from 'components';
import moment from 'moment';


const propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  logData: PropTypes.arrayOf(PropTypes.object),
  clouds: PropTypes.arrayOf(PropTypes.object),
  workspaces: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
};

class LogsContainer extends Component {

  constructor(props) {
    super(props);
    this.initLogs = props.actions.initLogs;
    this.initClouds = props.actions.initClouds;
    this.initWorkspaces = props.actions.initWorkspaces;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initLogs({});
      this.initClouds({});
      this.initWorkspaces({});
    }

    this.filterWorkspace = this.filterWorkspace.bind(this);
    this.filterCloud = this.filterCloud.bind(this);
  }

  filterWorkspace(event) {
    event.preventDefault();

    if (event.target.value === 'null') {
      this.initLogs({});
    } else {
      this.initLogs({ workspaces: [event.target.value] });
    }
  }

  filterCloud(event) {
    event.preventDefault();
    if (event.target.value === 'null') {
      this.initLogs({});
    } else {
      this.initLogs({ clouds: [event.target.value] });
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <p className="navbar-text">Workspace:</p>
            <form className="navbar-form navbar-left">
                <div className="form-group">
                  <select
                    value={this.wsId}
                    onChange={this.filterWorkspace}
                    className="form-control"
                  >
                    <option value="null">-- Select a Workspace --</option>
                    {
                      this.props.workspaces.map((workspace) => (
                        <option
                          key={workspace.id}
                          value={workspace.id}
                        >
                          {workspace.name}
                        </option>
                      ))
                    }
                  </select>
                </div>
            </form>
            <p className="navbar-text">Cloud:</p>
            <form className="navbar-form navbar-left">
                <div className="form-group">
                  <select
                    value={this.cloudId}
                    onChange={this.filterCloud}
                    className="form-control"
                  >
                    <option value="null">-- Select a Cloud --</option>
                    {
                      this.props.clouds.map((cloud) => (
                        <option
                          key={cloud.id}
                          value={cloud.id}
                        >
                          {cloud.name}
                        </option>
                      ))
                    }
                  </select>
                </div>
            </form>
            <p className="navbar-text">Date Range:</p>
            <button type="button" className="btn btn-default navbar-btn daterange-btn">
                <i className="icon-calendar3 position-left" />
                <span>Jan 18, 16 - Feb 16, 16</span>
                <b className="caret" />
            </button>
            <form className="navbar-form navbar-right" action="#">
                <div className="form-group">
                    <div className="has-feedback">
                        <input type="search" className="form-control" placeholder="Search Logs" />
                        <div className="form-control-feedback">
                            <i className="icon-search4 text-size-small text-muted" />
                        </div>
                    </div>
                </div>
            </form>
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content>
          <Loader loaded={this.props.initialized}>
            <div className="panel">
              <table className="table table-responsive table-default" id="logsTable">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Workspace</th>
                    <th>Cloud</th>
                    <th>Timestamp</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.props.logData.map((log) => (
                    <tr key={log.id}>
                      <td>{log.type}</td>
                      <td>{log.description}</td>
                      <td>{log.workspace}</td>
                      <td>{log.cloud}</td>
                      <td>{ moment(log.timestamp).format('MMMM D YYYY, h:mm:ss a')}</td>
                      <td><i className="icon-arrow-right6" /></td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
            <div id="content"></div>
          </Loader>
        </Page.Content>
      </Page.Default>
    );
  }
}

LogsContainer.propTypes = propTypes;

export default LogsContainer;
