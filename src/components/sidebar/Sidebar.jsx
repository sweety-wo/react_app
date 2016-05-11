import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  bgClass: PropTypes.string,
  fixed: PropTypes.bool,
  main: PropTypes.bool,
};

const defaultProps = {
  bgClass: 'bg-vs-blue',
  fixed: true,
  main: true,
};

function Sidebar(props) {
  return (
    <div
      className={
      classNames({
        sidebar: true,
        [props.bgClass]: true,
        'sidebar-main': props.main,
        'sidebar-secondary': !props.main,
        'sidebar-fixed': props.fixed,
      })
    }
    >
      <div className="sidebar-content">
        { props.children }
      </div>
    </div>
  );
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
