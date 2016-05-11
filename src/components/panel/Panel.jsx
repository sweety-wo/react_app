import React, { PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

// Default Props
// const defaultProps = {};

function Panel(props) {
  return (
    <div>{ props.children }</div>
  );
}

Panel.propTypes = propTypes;
// Panel.defaultProps = defaultProps;

export default Panel;
