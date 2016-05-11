import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Page } from 'components';
import Loader from 'react-loader';
import { chunk } from 'lodash';
import Placeholder from 'img/image.png';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
  workspaces: PropTypes.arrayOf(PropTypes.object),
  initialized: PropTypes.bool,
  initializedUser: PropTypes.bool,
  spInfo: PropTypes.object,
};

class UsersContainer extends Component {

  constructor(props) {
    super(props);
    this.initUsers = props.actions.initUsers;
    this.initWorkspaces = props.actions.initWorkspaces;
  }

  componentWillMount() {
    if (!this.props.initializedUser) {
      this.initUsers({});
    }

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
            Users
          </Page.Header.Title>
          <Page.Header.Navbar>
            <p className="navbar-text">Workspace:</p>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <select
                  value={this.wsId}
                  onChange={this.filterWorkspace}
                  className="form-control"
                >
                  <option>-- Select a Workspace --</option>
                  {
                    this.props.workspaces.map((workspace) => (
                      <option
                        key={workspace.id}
                        value={workspace.id}
                      >
                        {workspace.name}
                      </option>
                    ))
                  }
                </select>
              </div>
            </form>
            <p className="navbar-text">Status:</p>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <select onChange={this.filterStatus} className="form-control">
                  <option key="Active" value="1">Active</option>
                  <option key="Inactive" value="2">Inactive</option>
                </select>
              </div>
            </form>
            <p className="navbar-text">Date Range:</p>
            <button type="button" className="btn btn-default navbar-btn daterange-btn">
              <i className="icon-calendar3 position-left" />
              <span>Jan 18, 16 - Feb 16, 16</span>
              <b className="caret" />
            </button>
            <form className="navbar-form navbar-right" action="#">
              <div className="form-group">
                <div className="has-feedback">
                  <input type="search" className="form-control" placeholder="Search Users" />
                  <div className="form-control-feedback">
                    <i className="icon-search4 text-size-small text-muted" />
                  </div>
                </div>
              </div>
            </form>
          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content >
          <Loader loaded={this.props.initialized && this.props.initializedUser}>
            {
              chunk(this.props.users, 2).map((chunks, idx) => (
                <div className="row" key={idx}>
                  {
                    chunks.map((user) => (
                      <Link to={`/${this.props.params.locator}/users/${user.id}`} key={user.id}>
                        <div className="col-md-6" key={user.id}>
                          <div className="panel cursor-pointer">
                            <div className="panel-body">
                              <div className="media">
                                <div className="media-left media-middle">
                                    <img
                                      className="img-circle"
                                      src={Placeholder}
                                      alt=""
                                    />
                                </div>
                                <div className="media-body">
                                  <div className="media-heading text-semibold">{user.username}</div>
                                  <span className="text-muted">Development</span>
                                </div>
                                <div className="media-right media-middle">
                                  <span className="badge bg-success">Active</span>
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

UsersContainer.propTypes = propTypes;

export default UsersContainer;
