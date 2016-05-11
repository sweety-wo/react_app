import React, { Component, PropTypes } from 'react';
import Vmware from 'img/VmwareWhite50px.png';
import './styles/Cloud.less';
import { Page, Form, Navbar } from 'components';
import { Link } from 'react-router';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  initialized: PropTypes.bool,
  cloud: PropTypes.object,
  connectors: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.object,

};

class CloudContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.initConnectors = props.actions.initConnectors;
    this.initCloud = this.props.actions.initCloud;
    this.updateCloud = props.actions.updateCloud;
    this.deleteCloud = props.actions.deleteCloud;
    this.testCloud = props.actions.testCloud;
    this.props.cloud.cloudType = '';
  }
  //
  componentWillMount() {
    this.initCloud(this.props.params.id);
    this.initConnectors({});
    this.bindActionCreators();
  }

  bindActionCreators() {
    this.handleUpdateCloud = this.handleUpdateCloud.bind(this);
    this.handleDeleteCloud = this.handleDeleteCloud.bind(this);
    this.handleTestCloud = this.handleTestCloud.bind(this);
  }

  handleUpdateCloud(event) {
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
    this.updateCloud(this.props.cloud.id, data);
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

  handleDeleteCloud(event) {
    event.preventDefault();

    this.deleteCloud(this.props.cloud.id);
    this.redirect(`/${this.locator}/clouds`);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs>
            <li className="active"><Link to={`/${this.locator}/clouds`}>Clouds</Link></li>
          </Page.Header.Breadcrumbs>
          <Page.Header.Title>
            {this.props.cloud.name}
          </Page.Header.Title>
          <Page.Header.Navbar>

            <Navbar.CloudTabNav locator={this.props.params.locator}
              cloudId={this.props.cloud.id}
              active="cloudActive"
            />

            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteCloud}
            >
              <b><i className="icon-minus3" /></b>Delete Cloud
            </button>
            {(() => {
              if (this.props.cloud.cloudType === 'vmware') {
                return (
                  <a
                    href="http://cdn.vertiscale.com/HIPAA-vmware-v-2.ova"
                    type="button"
                    className="btn navbar-btn navbar-right btn-default btn-labeled"
                  >
                    <b><i className="icon-download" /></b>Download HIPAA Appliance
                  </a>
                );
              }

              return (
                <a
                  href="http://cdn.vertiscale.com/HIPAA-HyperV-v-2.vhdx"
                  type="button"
                  className="btn navbar-btn navbar-right btn-default btn-labeled"
                >
                  <b><i className="icon-download" /></b>Download HIPAA Appliance
                </a>
              );
            })()}

          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content>

          <div className="row">
            <div className="col-md-3">
              {(() => {
                if (this.props.cloud.cloudType === 'vmware') {
                  return (
                    <div id="hyperLogo">
                      <img
                        className="media-object img-responsive"
                        src={Vmware}
                        alt=""
                      />
                    </div>
                  );
                } else if (
                     this.props.cloud.cloudType === 'hyperv'
                  ) {
                  return (
                    <div id="hyperLogo">
                      <i className="icon-windows8 img-responsive" id="windowsLogo" />
                    </div>
                  );
                }

                return null;
              })()}

            </div>
            <div className="col-md-9">
              <div className="panel panel-flat">
                <div className="panel-heading">
                  <h5 className="panel-title">{this.props.cloud.name}</h5>
                </div>
                <div className="panel-body">

                  <form className="form-horizontal">

                    <Form.CloudForm cloud={this.props.cloud}
                      action={this.handleUpdateCloud}
                      testCloud={this.handleTestCloud}
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

CloudContainer.propTypes = propTypes;

export default CloudContainer;
