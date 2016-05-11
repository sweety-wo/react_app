import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function PageContent(props) {
  return (
    <div className="content">{ props.children }</div>
  );
}

PageContent.propTypes = propTypes;

export default PageContent;
