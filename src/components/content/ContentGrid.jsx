import React, { PropTypes, Children } from 'react';
import { chunk } from 'lodash';

const validCols = [2, 3, 4];

const propTypes = {
  children: PropTypes.node,
  cols: PropTypes.oneOf(validCols),
};

const defaultProps = {
  cols: 2,
};

function ContentGrid(props) {
  return (
    chunk(Children.toArray(props.children), props.cols).map((chunks, id) => (
      <div className="row" key={id}>
        {
          chunks.map((node, idx) => (
            <div className={`col-md-${12 / props.cols}`} key={idx}> {node} </div>
          ))
        }
      </div>
    ))
  );
}

ContentGrid.propTypes = propTypes;
ContentGrid.defaultProps = defaultProps;

export default ContentGrid;
