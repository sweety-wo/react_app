import React, { Component, PropTypes } from 'react';
import { Page } from 'components';
import Loader from 'react-loader';

// PropType definitions
const propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  applications: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
  userId: PropTypes.string,
};

class MyAppsContainer extends Component {

  constructor(props) {
    super(props);
    this.redirect = props.actions.push;
    this.initMyApps = props.actions.initMyApps;
    this.updateFavorite = props.actions.updateFavorite;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initMyApps(this.props.userId);
    }

    this.bindActionCreators();
  }

  bindActionCreators() {
    this.rdpAction = this.rdpAction.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }


  rdpAction() { }

  handleFavorite(app, operation) {
    const favorite = operation === 'add';

    const data = {
      appId: app.appId,
      name: app.name,
      appType: app.appType,
      icon: app.icon,
      favorite,
    };

    this.updateFavorite(this.props.userId, app.id, data);
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            My Apps
          </Page.Header.Title>
          <Page.Header.Navbar />
        </Page.Header>
        <Page.Content>
          <Loader loaded={this.props.initialized}>
            <div className="row">
              {
                this.props.applications.map((app) => (
                  <div className="col-md-3" key={app.id}>
                    <div className="thumbnail">
                      <div className="thumb">
                        <img className="media-object" src={`/api/v1/files/${app.icon}`} role="presentation" />
                      </div>
                      <div className="caption text-center">
                        <div className="text-semibold no-margin">{app.name}</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </Loader>
        </Page.Content>
      </Page.Default>
    );
  }
}

MyAppsContainer.propTypes = propTypes;

export default MyAppsContainer;
