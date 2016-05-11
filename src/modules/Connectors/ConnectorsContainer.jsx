import React, { Component, PropTypes } from 'react';
import { Page } from 'components';
import { chunk } from 'lodash';
import { Link } from 'react-router';
import Placeholder from 'img/image.png';


// PropType definitions
const propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  connectors: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
};

class ConnectorsContainer extends Component {

  constructor(props) {
    super(props);
    this.initConnectors = props.actions.initConnectors;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initConnectors({});
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar />
        </Page.Header.Default>
        <Page.Content >
          {
            chunk(this.props.connectors, 2).map((chunks) => (
              <div className="row" >
                {
                  chunks.map((connector) => (
                    <Link to={`/${this.props.params.locator}/connectors/${connector.id}`} key={connector.id}>
                      <div className="col-md-6" key={connector.id}>
                        <div className="panel cursor-pointer" >
                          <div className="panel-body">
                            <div className="media">
                              <div className="media-left">
                                <img src={Placeholder} role="presentation" />
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading">{connector.name}</h4>
                                <div className="row">
                                  <div className="col-sm-4">
                                  </div>
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
        </Page.Content >
      </Page.Default>
    );
  }
}

ConnectorsContainer.propTypes = propTypes;

export default ConnectorsContainer;
