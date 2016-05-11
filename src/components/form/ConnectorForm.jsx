import React, { Component, PropTypes } from 'react';

// PropTypes
const propTypes = {
  connector: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  action: PropTypes.func,
};

class ConnectorForm extends Component {

  constructor(props) {
    super(props);
    this.props.connector.name = '';
    this.props.connector.description = '';
    this.props.connector.lastFive = '';
    this.props.connector.roles = [];
  }

  componentWillMount() {
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.updateConnectorName = this.updateConnectorName.bind(this);
    this.updateConnectorDescription = this.updateConnectorDescription.bind(this);
    this.updateConnectorMac = this.updateConnectorMac.bind(this);
    this.updateConnectorRoles = this.updateConnectorRoles.bind(this);
  }

  updateConnectorName(event) {
    this.props.connector.name = event.target.value;
  }
  updateConnectorDescription(event) {
    this.props.connector.description = event.target.value;
  }
  updateConnectorMac(event) {
    this.props.connector.mac = event.target.value;
  }
  updateConnectorRoles(event) {
    this.props.connector.roles = event.target.value;
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
              value={this.props.connector.name}
              onChange={this.updateConnectorName}
              placeholder="Connector Name"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Description</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              defaultValue={this.props.connector.description}
              onChange={this.updateConnectorDescription}
              placeholder="Connector Description"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Description</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={this.props.connector.lastFive}
              onChange={this.updateConnectorMac}
              placeholder="Connector Mac Address"
            />
          </div>
        </div>

        <button
          className="btn btn-labeled navbar-btn navbar-right btn-success"
          onClick={this.props.action}
        >
          <b><i className="icon-checkmark" /></b> Save
        </button>
      </div>
    );
  }
}

ConnectorForm.propTypes = propTypes;

export default ConnectorForm;
