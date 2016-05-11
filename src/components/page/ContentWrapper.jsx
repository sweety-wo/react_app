import React, { PropTypes } from 'react';

const ContentWrapper = (props) => (
  <div className="content-wrapper">
    { props.children }
  </div>
);

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ContentWrapper;
