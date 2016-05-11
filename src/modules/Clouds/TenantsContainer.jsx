import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';
import { Link } from 'react-router';
import Loader from 'react-loader';
import { chunk } from 'lodash';
import Placeholder from 'img/image.png';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  initialized: PropTypes.bool,
  params: PropTypes.object,
  tenants: PropTypes.arrayOf(PropTypes.object),
  cloud: PropTypes.object,
};

class TenantsContainer extends Component {

  constructor(props) {
    super(props);
    this.initTenants = this.props.actions.initTenants;
  }

  componentWillMount() {
    this.initTenants(this.props.cloud.id);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs>
            <li className="active">
              <Link to={`/${this.locator}/clouds`}>Clouds</Link>
            </li>
          </Page.Header.Breadcrumbs>
          <Page.Header.Title>
            {this.props.cloud.name} - Tenants
          </Page.Header.Title>
          <Page.Header.Navbar>
            <Navbar.CloudTabNav locator={this.props.params.locator}
              cloudId={this.props.cloud.id}
              active="tenantActive"
            />

            <Link to={'msp/clouds/tenant/new'}>
              <button className="btn navbar-btn navbar-right btn-primary btn-labeled">
                <b><i className="icon-plus3" /></b>Add new Tenant
              </button>
            </Link>
          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content >
          <h1>Tenantss</h1>
          <Loader loaded={this.props.initialized}>
            {
              chunk(this.props.tenants, 2).map((chunks, idx) => (
                <div className="row" key={idx}>
                  {
                    chunks.map((tenant) => (
                      <Link
                        to={`/${this.props.params.locator}/clouds/${this.props.cloud.id}/tenants/${tenant.id}`}
                        key={tenant.id}
                      >
                        <div className="col-md-6">
                          <div className="panel cursor-pointer">
                            <div className="panel-body">
                              <div className="media">
                                <div className="media-left">
                                  <img
                                    className="media-object"
                                    src={Placeholder}
                                    alt=""
                                  />
                                </div>
                                <div className="media-body">
                                  <h4 className="media-heading">{tenant.name}</h4>
                                  <div className="row">
                                    <div className="col-sm-4">
                                      Status
                                    </div>
                                    <div className="col-sm-4">
                                      Info
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              ))
            }
          </Loader>
        </Page.Content >
      </Page.Default>
    );
  }
}

TenantsContainer.propTypes = propTypes;

export default TenantsContainer;
