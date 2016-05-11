import React, { Component, PropTypes } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';

const authWrapper = (args) => {
  const { selector, predicate, wrapperDisplayName } = { ...args };

  const isAuthorized = (authData) => predicate(authData);

  const ensureAuth = ({ location, authData, params }, redirect) => {
    const query = { redirect: `${location.pathname}${location.search}` };

    if (!isAuthorized(authData)) {
      redirect({
        pathname: `/${params.locator}/login`,
        query,
      });
    }
  };

  function wrapComponent(DecoratedComponent) {
    // Get display name of wrapped component
    const displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

    class WrapperComponent extends Component {

      componentWillMount() {
        ensureAuth(this.props, this.context.router.replace);
      }

      componentWillReceiveProps(nextProps) {
        ensureAuth(nextProps, this.context.router.replace);
      }

      render() {
        const { authData, ...otherProps } = this.props;
        if (isAuthorized(authData)) {
          return <DecoratedComponent {...otherProps} />;
        }

        return null;
      }

    }

    WrapperComponent.displayName = `${wrapperDisplayName}(${displayName})`;

    WrapperComponent.propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
      }).isRequired,
      authData: PropTypes.any,
    };

    WrapperComponent.contextTypes = {
      router: PropTypes.object,
      locator: PropTypes.string,
    };

    const mapStateToProps = (state, ownProps) => ({
      authData: selector(state, ownProps, false),
    });

    const ConnectedWrapperComponent = connect(mapStateToProps)(WrapperComponent);

    return hoistStatics(ConnectedWrapperComponent, DecoratedComponent);
  }

  wrapComponent.onEnter = (store, nextState, replace) => {
    const authData = selector(store.getState(), null, true);
    ensureAuth({ location: nextState.location, authData }, replace);
  };

  return wrapComponent;
};

export default authWrapper;
