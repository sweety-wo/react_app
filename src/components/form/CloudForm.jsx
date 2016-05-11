import React, { Component, PropTypes } from 'react';

// PropTypes
const propTypes = {
  cloud: PropTypes.object,
  connectors: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  action: PropTypes.func,
  testCloud: PropTypes.func,
};

class CloudForm extends Component {

  constructor(props) {
    super(props);
    this.props.cloud.name = '';
    this.props.cloud.connectors = '';
    this.props.cloud.apiHost = '';
    this.props.cloud.apiUsername = '';
    this.props.cloud.apiPassword = '';
  }

  componentWillMount() {
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.updateCloudName = this.updateCloudName.bind(this);
    this.updateCloudHost = this.updateCloudHost.bind(this);
    this.updateCloudUsername = this.updateCloudUsername.bind(this);
    this.updateCloudPassword = this.updateCloudPassword.bind(this);
    this.updateCloudConnectors = this.updateCloudConnectors.bind(this);
  }

  updateCloudName(event) {
    this.props.cloud.name = event.target.value;
  }
  updateCloudConnectors(event) {
    this.props.cloud.connectors = event.target.value;
  }
  updateCloudHost(event) {
    this.props.cloud.apiHost = event.target.value;
  }
  updateCloudUsername(event) {
    this.props.cloud.apiUsername = event.target.value;
  }
  updateCloudPassword(event) {
    this.props.cloud.apiPassword = event.target.value;
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="control-label col-md-3">Name</label>

          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              defaultValue={this.props.cloud.name}
              onChange={this.updateCloudName}
              placeholder="Cloud Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-3">Connectors</label>

          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              defaultValue={this.props.cloud.connectors}
              onChange={this.updateCloudConnectors}
              placeholder="Add Cloud Connectors"
            />
          </div>
        </div>

        {(() => {
          if (this.props.cloud.cloudType === 'vmware') {
            return (
              <div className="form-group">
                <label className="control-label col-md-3">API URL</label>

                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={this.props.cloud.apiHost}
                    onChange={this.updateCloudHost}
                    placeholder="Cloud API URL"
                  />
                </div>
              </div>
            );
          }

          return null;
        })()}

        {(() => {
          if (this.props.cloud.cloudType === 'vmware') {
            return (
              <div className="form-group">
                <label className="control-label col-md-3">API Username</label>

                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={this.props.cloud.apiUsername}
                    onChange={this.updateCloudUsername}
                    placeholder="User Name"
                  />
                </div>
              </div>
            );
          }

          return null;
        })()}

        {(() => {
          if (this.props.cloud.cloudType === 'vmware') {
            return (
              <div className="form-group">
                <label className="control-label col-md-3">API Password</label>

                <div className="col-md-9">
                  <input
                    type="password"
                    className="form-control"
                    defaultValue={this.props.cloud.apiPassword}
                    onChange={this.updateCloudPassword}
                    placeholder="Password"
                  />
                </div>
              </div>
            );
          }
          return null;
        })()}

        <button
          className="btn btn-labeled navbar-btn navbar-right btn-success"
          onClick={this.props.action}
        >
          <b><i className="icon-checkmark" /></b> Save
        </button>
        <button
          className="btn navbar-btn navbar-right btn-default btn-labeled"
          onClick={this.props.testCloud}
        >
          <b><i className="icon-pulse2" /></b>Test Cloud
        </button>
      </div>
    );
  }
}

CloudForm.propTypes = propTypes;

export default CloudForm;
