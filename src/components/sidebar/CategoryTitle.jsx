import React, { PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

function CatgeoryTitle(props) {
  return (
    <div className="category-title no-border">{ props.children }</div>
  );
}

CatgeoryTitle.propTypes = propTypes;

export default CatgeoryTitle;
