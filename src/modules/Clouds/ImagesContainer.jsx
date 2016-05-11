import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loader from 'react-loader';
import Placeholder from 'img/image.png';
import { Page, Navbar } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  initialized: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.object),
  cloud: PropTypes.object,
  params: PropTypes.object,
};

class ImageContainer extends Component {

  constructor(props) {
    super(props);
    this.initImages = this.props.actions.initImages;
  }

  componentWillMount() {
    this.initImages(this.props.cloud.id);
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
            {this.props.cloud.name} - Gold Images
          </Page.Header.Title>
          <Page.Header.Navbar>
            <Navbar.CloudTabNav locator={this.props.params.locator}
              cloudId={this.props.cloud.id}
              active="imageActive"
            />

            <Link to={`/${this.props.params.locator}/clouds/${this.props.cloud.id}/images/image/new`}>
              <button className="btn navbar-btn navbar-right btn-primary btn-labeled">
                <b><i className="icon-plus3" /></b>Add new Gold Image
              </button>
            </Link>
        </Page.Header.Navbar>
        </Page.Header>
        <Page.Content >
          <Loader loaded={this.props.initialized}>
            <div className="row">
              {
                this.props.images.forEach((image) => (
                  <Link
                    to={`/${this.props.params.locator}/clouds/${this.props.cloud.id}/images/${image.id}`}
                    key={image.id}
                  >
                    <div className="col-md-6">
                      <div className="panel cursor-pointer">
                        <div className="panel-body">
                          <div className="media">
                            <divs className="media-left">
                              <img
                                className="media-object"
                                src={Placeholder}
                                alt=""
                              />
                            </divs>
                            <div className="media-body">
                              <h4 className="media-heading">{image.name}</h4>
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
          </Loader>
        </Page.Content >
      </Page.Default>
    );
  }
}

ImageContainer.propTypes = propTypes;

export default ImageContainer;
