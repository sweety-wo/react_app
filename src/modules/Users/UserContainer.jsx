import React, { Component, PropTypes } from 'react';
import { Page } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
};

class UsersContainer extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <Page.Default>
        <Page.Header>
          <Page.Header.Breadcrumbs />
          <Page.Header.Title>
            Username
          </Page.Header.Title>
          <Page.Header.Navbar>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav element-active-vs-navy">
                <li className="active">
                  <a href="" data-toggle="tab" aria-expanded="true">
                    <i className="icon-menu7 position-left" /> Dashboard
                  </a>
                </li>
                <li className="">
                  <a href="" data-toggle="tab" aria-expanded="false">
                    <i className="icon-calendar3 position-left" /> Recent Activity</a>
                </li>
              </ul>
            </div>
          </Page.Header.Navbar>
        </Page.Header>
        <Page.Content>
            hello
        </Page.Content>
      </Page.Default>
    );
  }
}

UsersContainer.propTypes = propTypes;

export default UsersContainer;
