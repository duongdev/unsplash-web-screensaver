import React from 'react';
import PropTypes from 'prop-types';

import { Spinner as zIndex } from 'zIndexes';

const Spinner = ({ percent }) => (
  <div className="Spinner" style={{
    position: 'fixed',
    top: 0, left: 0, right: 0,
    height: 3,
    zIndex
  }}>
    <div style={{
      backgroundColor: 'teal',
      position: 'fixed',
      left: 0, top: 0, height: 3,
      width: `${(percent === -1 || percent === 100) ? 0 : percent}%`,
      opacity: (0 < percent && percent <= 100) ? 1 : 0,
      transition: 'all 1s'
    }} />
  </div>
);

Spinner.propTypes = {
  percent: PropTypes.number
};
Spinner.defaultProps = {
  percent: 0
};

export default Spinner;
