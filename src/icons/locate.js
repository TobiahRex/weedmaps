/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export const Locate = ({ height, width, fill }) => (
  <svg
    className="wm-locate"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6.364C7.99 6.364 6.364 7.99 6.364 10c0 2.01 1.627 3.636 3.636 3.636 2.01 0 3.636-1.627 3.636-3.636 0-2.01-1.627-3.636-3.636-3.636zm8.127 2.727C17.71 5.3 14.7 2.29 10.91 1.874V0H9.09v1.873C5.3 2.29 2.29 5.3 1.874 9.09H0v1.82h1.873c.418 3.79 3.427 6.8 7.218 7.217V20h1.82v-1.873c3.79-.418 6.8-3.427 7.217-7.218H20V9.09h-1.873zM10 16.365c-3.518 0-6.364-2.846-6.364-6.364S6.482 3.636 10 3.636 16.364 6.482 16.364 10 13.518 16.364 10 16.364z"
      fill={fill}
    />
  </svg>
);

Locate.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

Locate.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#fff',
};

export default Locate;
