import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';
import { Link } from 'react-router';
import Loader from 'react-loader';
import './styles/SelectedImage.less';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  cloud: PropTypes.object,
  params: PropTypes.object,
  actions: PropTypes.object.isRequired,
  initialized: PropTypes.bool,
  apps: PropTypes.object,
};

class SelectedImageContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.locator = props.params.locator;
    this.initSelectedImage = this.props.actions.initSelectedImage;
    this.initApps = this.props.actions.initApps;
    this.props.image.name = '';
  }

  componentWillMount() {
    this.initSelectedImage(this.props.cloud.id, this.props.params.gid);
    this.initApps(this.props.params.gid);
  }

  handleDeleteImage(event) {
    event.preventDefault();
    this.deleteImage(this.props.cloud.id, this.props.image.id);
    this.redirect(`/${this.locator}/clouds/${this.props.cloud.id}/images`);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs>
            <li className="active">
              <Link to={`/${this.locator}/clouds`}>Clouds</Link>
            </li>
            <li className="active">
              <Link to={`/${this.locator}/clouds/${this.props.cloud.id}`}>${this.props.cloud.name}</Link>
            </li>
          </Page.Header.Breadcrumbs>
          <Page.Header.Title>
            {this.props.image.name}
          </Page.Header.Title>
          <Page.Header.Navbar>
            <Navbar.CloudTabNav locator={this.props.params.locator}
              cloudId={this.props.cloud.id}
              active="imageActive"
            />
            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteImage}
            >
              <b><i className="icon-minus3" /></b>Delete Gold Image
            </button>
            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteImage}
            >
              <b><i className="icon-database-refresh" /></b>Rebuild Gold Image
            </button>
            <button
              className="btn navbar-btn navbar-right btn-default btn-labeled"
              onClick={this.handleDeleteImage}
            >
              <b><i className="icon-plus3" /></b>Install Office 365
            </button>

          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content >
          <div className="col-md-3 goldImageName">
            <h1>{this.props.image.name}</h1>
            <div>

              {(() => {
                if (this.props.image.os === 'win7' || this.props.image.os === 'win8') {
                  return (
                      <i className="fa fa-windows"></i>
                  );
                } else if (this.props.image.os === 'osx') {
                  return (
                      <i className="fa fa-apple"></i>
                  );
                }

                return null;
              })()}

              <span> {this.props.image.os} </span>
            </div>
          </div>
          <div className="col-md-9">
            <Loader loaded={this.props.initialized}>
              <div className="panel">
                <table className="table table-responsive table-default" id="logsTable">
                  <thead>
                  <tr>
                    <th>Application</th>
                    <th>Publish</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.apps.map((app) => (
                      <tr key={app.id}>
                        <td>
                          <img
                            className="imageIcons"
                            src={`/api/v1/files/${app.icon}`}
                            alt=""
                          />
                          {app.name}
                        </td>

                        <td><input type="checkbox" className="styled" /></td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
              <div id="content"></div>
            </Loader>
          </div>
        </Page.Content >
      </Page.Default>
    );
  }
}

SelectedImageContainer.propTypes = propTypes;

export default SelectedImageContainer;
