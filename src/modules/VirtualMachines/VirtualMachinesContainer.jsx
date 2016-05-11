import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { Page } from 'components';
import './styles/VirtualMachines.less';

// PropType definitions
const propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  vmData: PropTypes.arrayOf(PropTypes.object),
  clouds: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
};

class VirtualMachinesContainer extends Component {

  constructor(props) {
    super(props);
    this.initVirtualMachines = props.actions.initVirtualMachines;
    this.initClouds = props.actions.initClouds;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initVirtualMachines({});
      this.initClouds({});
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Virtual Machines
          </Page.Header.Title>
          <Page.Header.Navbar>
            <p className="navbar-text">Cloud:</p>
            <form className="navbar-form navbar-left">
                <div className="form-group">
                <select
                  value={this.cloudId}
                  className="form-control"
                >
                  <option>-- Select a Cloud --</option>
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

          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content >
          <h1>Virtual Machines Module</h1>
          <Loader loaded={this.props.initialized}>
            <table className="table table-responsive table-default">
              <thead>
              <tr>
                <th>Name</th>
                <th>OS</th>
                <th>Description</th>
                <th>Tenant</th>
                <th>Actions</th>

              </tr>
              </thead>
              <tbody>
              {
                this.props.vmData.map((vm) => (
                  <tr key={vm.id}>
                    <td><i className="icon-display icon-display-custom" /> {vm.name}</td>
                    <td>{vm.type} {vm.arch}</td>
                    <td>{vm.description}</td>
                    <td>{vm.tenant}</td>
                    <td>
                      <i className="icon-database-refresh icon-display-action" />
                      <i className="icon-switch2 icon-display-action" />
                      <i className="icon-copy3 icon-display-action" />
                      <i className="icon-trash icon-display-action" />
                     </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </Loader>
        </Page.Content >
      </Page.Default>
    );
  }
}

VirtualMachinesContainer.propTypes = propTypes;

export default VirtualMachinesContainer;
