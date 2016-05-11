import React, { Component, PropTypes } from 'react';

// PropType definitions
const propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  events: PropTypes.arrayOf(PropTypes.object),
};

class PushTest extends Component {

  constructor(props) {
    super(props);
    this.actions = props.actions;
  }

  componentWillMount() {
    this.actions.startListening();
  }

  componentWillUnmount() {
    this.actions.stopListening();
  }

  render() {
    return (
      <ul>
        {this.props.events.map((event) => (<li>{event.payload.toString()}</li>))}
      </ul>
    );
  }
}

PushTest.propTypes = propTypes;

export default PushTest;
