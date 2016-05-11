import React, { Component, PropTypes } from 'react';
import { Page } from 'components';
import Loader from 'react-loader';
import { Link } from 'react-router';
import { chunk } from 'lodash';
import Placeholder from 'img/image.png';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  workspaces: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
};

class WorkspacesContainer extends Component {

  constructor(props) {
    super(props);
    this.initWorkspaces = props.actions.initWorkspaces;
  }

  componentWillMount() {
    if (!this.props.initialized) {
      this.initWorkspaces({});
    }
  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Workspaces
          </Page.Header.Title>
          <Page.Header.Navbar>
            <Link to={'msp/workspaces/workspace/new'}>
              <button className="btn navbar-btn btn-primary btn-labeled">
                <b><i className="icon-plus3" /></b>Add new Workspace
              </button>
            </Link>
            <form className="navbar-form navbar-right" action="#">
              <div className="form-group">
                <div className="has-feedback">
                  <input type="search" className="form-control" placeholder="Search Workspaces" />
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
            chunk(this.props.workspaces, 2).map((chunks, idx) => (
              <div className="row" key={idx}>
                {
                  chunks.map((workspace) => (
                    <Link
                      to={`/${this.props.params.locator}/workspaces/${workspace.id}`}
                      key={workspace.id}
                    >
                      <div className="col-md-6" key={workspace.id}>
                        <div className="panel cursor-pointer" >
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
                                <h4 className="media-heading">{workspace.name}</h4>
                                <div className="row">
                                  <div className="col-sm-4">
                                    Users
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
          </Loader>
        </Page.Content >
      </Page.Default>
    );
  }
}

WorkspacesContainer.propTypes = propTypes;

export default WorkspacesContainer;
