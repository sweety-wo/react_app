import React, { PropTypes } from 'react';

// PropTypes
const propTypes = {
  children: PropTypes.node,
};

const contextTypes = {
  router: PropTypes.object,
};

function HeaderTitle(props, context) {
  return (
    <div className="page-header-content">
      <div className="page-title">
        <h5>
          <i
            onClick={ context.router.goBack }
            className="cursor-pointer icon-arrow-left12 position-left"
          />
          <span className="text-semibold">{ props.children }</span>
        </h5>
      </div>
    </div>
  );
}

HeaderTitle.propTypes = propTypes;
HeaderTitle.contextTypes = contextTypes;

export default HeaderTitle;
