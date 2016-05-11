import React, { PropTypes } from 'react';
import Header from './Header.jsx' ;
import HeaderBreadcrumbs from './HeaderBreadcrumbs.jsx';
import HeaderContent from './HeaderContent.jsx';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

// Default Props
// const defaultProps = {};

function HeaderDefault(props) {
  return (
    <Header>
      <HeaderBreadcrumbs />
      <HeaderContent />
      { props.children }
    </Header>
  );
}

HeaderDefault.propTypes = propTypes;
// HeaderDefault.defaultProps = defaultProps;

export default HeaderDefault;
