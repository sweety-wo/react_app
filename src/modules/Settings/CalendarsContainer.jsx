import React, { Component, PropTypes } from 'react';
import { Page, Navbar } from 'components';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
};

class CalendersContainer extends Component {

  componentWillMount() {}

  render() {
    return (
      <Page.Default>
        <Page.Header.Default>
          <Page.Header.Navbar>
            <Navbar.SettingsTabNav locator={this.props.params.locator} active="calendarActive" />
          </Page.Header.Navbar>
        </Page.Header.Default>
        <Page.Content >
          <h1>Resource Calendars</h1>
        </Page.Content >
      </Page.Default>
    );
  }
}

CalendersContainer.propTypes = propTypes;

export default CalendersContainer;
