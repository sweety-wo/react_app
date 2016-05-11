import React, { Component, PropTypes } from 'react';
import { Page } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
};

class ErrorPagesContainer extends Component {

  // constructor(props) {
  //  super(props);
  // }

  componentWillMount() {}

  render() {
    return (
      <Page className="Login-container bg-vs-gradient">
        <Page.Content>
          <h1>ErrorPages</h1>

          {(() => {
            if (this.props.params.id === '402') {
              return (
                <h1>402: Not permitted</h1>
              );
            } else if (this.props.params.id === '403') {
              return (
                <h1>403: Not accessible</h1>
              );
            } else if (this.props.params.id === '404') {
              return (
                <h1>404: Not found</h1>
              );
            } else if (this.props.params.id === '405') {
              return (
                <h1>405: Remote Procedure Call failed</h1>
              );
            } else if (this.props.params.id === '500') {
              return (
                <h1>500: Internal Server Error</h1>
              );
            }

            return null;
          })()}

        </Page.Content>
      </Page>
    );
  }
}

ErrorPagesContainer.propTypes = propTypes;

export default ErrorPagesContainer;
