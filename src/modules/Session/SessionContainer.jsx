import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';

const propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.node,
  loginProfile: PropTypes.object,
  initialized: PropTypes.bool,
  sessionId: PropTypes.string,
  accessLevel: PropTypes.string,
  user: PropTypes.object,
  params: PropTypes.object,
  routes: PropTypes.arrayOf(PropTypes.object),
};

const childContextTypes = {
  locator: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

class SessionContainer extends Component {

  constructor(props) {
    super(props);
    this.initSession = props.actions.initSession;
    this.redirect = props.actions.push;
  }

  getChildContext() {
    return {
      locator: this.props.params.locator,
      routes: this.props.routes,
    };
  }

  // FIXME Only init session if it's not already initialized
  // FIXME Handle locator changes
  // FIXME Persist session to localstorage for rehydration on browser reload
  componentWillMount() {
    if (!this.props.initialized) {
      this.initSession(this.props.params.locator);
    }
  }

  handleLogin(input) {
    this.userLogin(input);
  }

  handleLogout() {
    this.userLogout();
  }

  render() {
    document.body.setAttribute('class', 'navbar-top');
    return (
      <Loader loaded={this.props.initialized}>
        { this.props.children }
      </Loader>
    );
  }

}

SessionContainer.propTypes = propTypes;
SessionContainer.childContextTypes = childContextTypes;

export default SessionContainer;
