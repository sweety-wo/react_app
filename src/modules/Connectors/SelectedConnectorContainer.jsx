import React, { Component, PropTypes } from 'react';
import { Page, Form } from 'components';

// PropType definitions
const propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  connector: PropTypes.object,
  initialized: PropTypes.bool,
};

class SelectedConnectorContainer extends Component {

  constructor(props) {
    super(props);
    this.initSelectedConnector = props.actions.initSelectedConnector;
  }

  componentWillMount() {
    this.initSelectedConnector(this.props.params.id);
  }

  handleCreateConnector(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteCloud}
            >
              <b><i className="icon-minus3" /></b>Delete Connector
            </button>
            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
            >
              <b><i className="icon-download" /></b>Download Connector
            </button>
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <h1>Connector</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-flat">
                <div className="panel-heading">
                  <h5 className="panel-title">{this.props.connector.name}</h5>
                </div>
                <div className="panel-body">

                  <form className="form-horizontal">

                    <Form.ConnectorForm connector={this.props.connector}
                      action={this.handleCreateConnector}
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

SelectedConnectorContainer.propTypes = propTypes;

export default SelectedConnectorContainer;
