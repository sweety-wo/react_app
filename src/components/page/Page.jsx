import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = { height: this.calculateAvailableSize() };
  }

  componentWillMount() {
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  calculateAvailableSize() {
    const navbar = document.getElementById('navbar');

    if (navbar) {
      return window.innerHeight - navbar.getBoundingClientRect().height;
    }

    return window.innerHeight;
  }

  handleResize() {
    this.setState({ height: this.calculateAvailableSize() });
  }

  render() {
    return (
      <div
        className={classNames('page-container', this.props.className)}
        style={{ minHeight: this.state.height }}
      >
        <div className="page-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

Page.propTypes = propTypes;

export default Page;
