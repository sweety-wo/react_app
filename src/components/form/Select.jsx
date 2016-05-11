import React, { PropTypes } from 'react';
import { map } from 'lodash';

// PropTypes
const propTypes = {
  options: PropTypes.object,
  selected: PropTypes.string,
};

function Select(props) {
  return (
    <div className="form-group">
      <select className="form-control">
        {
          map(props.options, (value, key) => (
            <option key={key} value={key} selected={key === props.selected}>{value}</option>
          ))
        }
      </select>
    </div>
  );
}

Select.propTypes = propTypes;

export default Select;
