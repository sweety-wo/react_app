import React, { PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

// Default Props
// const defaultProps = {};

function CategoryContent(props) {
  return (
    <div className="category-content no-padding">
      { props.children }
    </div>
  );
}

CategoryContent.propTypes = propTypes;
// SidebarCategoryContent.defaultProps = defaultProps;

export default CategoryContent;
