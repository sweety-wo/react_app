import React, { Component, PropTypes } from 'react';
import { Page, Form } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  cloud: PropTypes.object,
};

class NewCloudContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.initConnectors = props.actions.initConnectors;
    this.initCloud = this.props.actions.initCloud;
    this.createCloud = props.actions.createCloud;
    this.updateCloud = props.actions.updateCloud;
    this.deleteCloud = props.actions.deleteCloud;
    this.testCloud = props.actions.testCloud;
    this.props.cloud.cloudType = '';
  }
  componentWillMount() {
    this.initConnectors({});
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.updateCloudType = this.updateCloudType.bind(this);
    this.handleCreateCloud = this.handleCreateCloud.bind(this);
    this.handleTestCloud = this.handleTestCloud.bind(this);
  }
  updateCloudType(event) {
    this.props.cloud.cloudType = event.target.value;
    this.setState({ showResults: true });
  }

  handleCreateCloud(event) {
    event.preventDefault();

    const data = {
      name: this.props.cloud.name,
      cloudType: this.props.cloud.cloudType,
      apiHost: this.props.cloud.apiHost,
      apiUsername: this.props.cloud.apiUsername,
      apiPassword: this.props.cloud.apiPassword,
      connectors: this.props.cloud.connectors,
    };
    this.createCloud(data);
    this.redirect(`/${this.locator}/clouds`);
  }
  handleTestCloud(event) {
    event.preventDefault();

    const data = {
      id: this.props.cloud.id,
      name: this.props.cloud.name,
      cloudType: this.props.cloud.cloudType,
      apiHost: this.props.cloud.apiHost,
      apiUsername: this.props.cloud.apiUsername,
      apiPassword: this.props.cloud.apiPassword,
      connectors: this.props.cloud.connectors,
    };
    this.testCloud(this.props.cloud.id, data);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar />
        </Page.Header.Default>
        <Page.Content >
          <h1>Create New Cloud</h1>

          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-9">
              <div className="panel panel-flat">
                <div className="panel-heading">
                  <h5 className="panel-title">{this.props.cloud.name}</h5>
                </div>
                <div className="panel-body">

                  <form className="form-horizontal">

                    <div className="form-group">
                      <label className="control-label col-md-3">Cloud Type</label>
                      <div className="col-md-9">
                        <select
                          type="text"
                          className="form-control"
                          value={this.props.cloud.cloudType}
                          onChange={this.updateCloudType}
                        >
                          <option> --  Select a Hypervisor -- </option>
                          <option value="vmware">VMware</option>
                          <option value="hyperv">Hyper-V</option>
                        </select>
                      </div>
                    </div>

                    <Form.CloudForm cloud={this.props.cloud}
                      action={this.handleCreateCloud}
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

NewCloudContainer.propTypes = propTypes;

export default NewCloudContainer;
