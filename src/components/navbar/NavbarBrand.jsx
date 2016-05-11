import React, { PropTypes } from 'react';
import classNames from 'classnames';

// PropTypes
const propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  name: PropTypes.string,
  linkTo: PropTypes.string,
  className: PropTypes.string,
};

// Default Props
const defaultProps = {
  name: 'My Brand',
  linkTo: '#',
};

function NavbarBrand(props) {
  let brand;

  if (props.image !== null) {
    brand = <img src={props.image} role="presentation" />;
  } else {
    brand = props.name;
  }

  return (
    <a className={classNames('navbar-brand', props.className)} href={props.linkTo}>{ brand }</a>
  );
}

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
