import React, { PropTypes } from 'react';
import classNames from 'classnames';

// PropTypes
const propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

// Default Props
const defaultProps = {
  visible: true,
};

function Category(props) {
  return (
    <div
      className={
        classNames({
          'sidebar-category': true,
          'sidebar-category-visible': props.visible,
        })
      }
    >
      { props.children }
    </div>
  );
}

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
