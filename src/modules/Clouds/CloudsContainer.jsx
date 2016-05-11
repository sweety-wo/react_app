import React, { Component, PropTypes } from 'react';
import { Page } from 'components';
import Loader from 'react-loader';
import { Link } from 'react-router';
import { chunk } from 'lodash';
import Placeholder from 'img/image.png';
import './styles/Clouds.less';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  initialized: PropTypes.bool,
  clouds: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.object,
};

class CloudsContainer extends Component {

  constructor(props) {
    super(props);
    this.initClouds = this.props.actions.initClouds;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initClouds();
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Clouds
          </Page.Header.Title>
          <Page.Header.Navbar>
            <Link to={'msp/clouds/cloud/new'}>
              <button className="btn navbar-btn btn-primary btn-labeled">
                <b><i className="icon-plus3" /></b>Add new Cloud
              </button>
            </Link>
            <form className="navbar-form navbar-right" action="#">
              <div className="form-group">
                <div className="has-feedback">
                  <input type="search" className="form-control" placeholder="Search Clouds" />
                  <div className="form-control-feedback">
                    <i className="icon-search4 text-size-small text-muted" />
                  </div>
                </div>
              </div>
            </form>
          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content >

          <Loader loaded={this.props.initialized}>
            {
              chunk(this.props.clouds, 2).map((chunks, idx) => (
                <div className="row" key={idx}>
                  {
                    chunks.map((cloud) => (
                      <Link to={`/${this.props.params.locator}/clouds/${cloud.id}`} key={cloud.id}>
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
                                  <h4 className="media-heading">{cloud.name}</h4>
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
        </Page.Content>
      </Page.Default>
    );
  }
}

CloudsContainer.propTypes = propTypes;

export default CloudsContainer;
