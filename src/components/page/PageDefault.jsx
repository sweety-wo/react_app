import React, { PropTypes } from 'react';
import { Page, Sidebar } from 'components';
import logo from 'img/logo_white.png';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

const contextTypes = {
  locator: PropTypes.string,
};

function PageDefault(props, context) {
  return (
    <Page>
      <Sidebar>
        <Sidebar.Category>
          <Sidebar.CategoryContent>
            <Sidebar.Navigation>
              <Sidebar.NavigationHeader>Main</Sidebar.NavigationHeader>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/dashboard`} >
                <i className="icon-home4" />
                <span>Dashboard</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/my-apps`} >
                <i className="icon-grid5" />
                <span>My Apps</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationHeader>Policy</Sidebar.NavigationHeader>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/workspaces`} >
                <i className="icon-display" />
                <span>Workspaces</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/users`} >
                <i className="icon-users" />
                <span>Users</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/permissions`} >
                <i className="icon-lock2" />
                <span>Permissions</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationHeader>Resources</Sidebar.NavigationHeader>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/clouds`} >
                <i className="icon-cloud2" />
                <span>Clouds</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/virtual-machines`} >
                <i className="icon-server" />
                <span>Virtual Machines</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/connectors`} >
                <i className="icon-lan" />
                <span>Connectors</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationHeader>Management</Sidebar.NavigationHeader>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/workflows`} >
                <i className="icon-wave" />
                <span>Workflows</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/logs`} >
                <i className="icon-clipboard3" />
                <span>Logs</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/settings/profile`} >
                <i className="icon-cog" />
                <span>Settings</span>
              </Sidebar.NavigationItem>
              <Sidebar.NavigationItem linkTo={`/${context.locator}/help`} >
                <i className="icon-help" />
                <span>Help</span>
              </Sidebar.NavigationItem>
            </Sidebar.Navigation>
          </Sidebar.CategoryContent>
        </Sidebar.Category>
        <Sidebar.Category>
          <Sidebar.CategoryTitle>
            Powered by:
          </Sidebar.CategoryTitle>
          <Sidebar.CategoryContent>
            <div className="pl-10 pr-10">
              <div className="thumb">
                <img role="presentation" src={logo} />
              </div>
            </div>
          </Sidebar.CategoryContent>
        </Sidebar.Category>
      </Sidebar>
      <Page.ContentWrapper>
        { props.children }
      </Page.ContentWrapper>
    </Page>
  );
}

PageDefault.propTypes = propTypes;
PageDefault.contextTypes = contextTypes;

export default PageDefault;
