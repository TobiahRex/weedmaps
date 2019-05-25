/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export const MapPin = ({ height, width, fill }) => (
  <svg
    className="wm-icon-map-pin"
    width={height}
    height={width}
    fill={fill}
    viewBox="0 0 100 110"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.8 12.5a2.1 2.1 0 0 0-.2 0 25.5 25.5 0 0 0-21.7 38 2.1 2.1 0 0 0 .2.5l20.2 35.4a2.1 2.1 0 0 0 3.7 0l19.8-35.3.1-.2a2.1 2.1 0 0 0 .2-.4 2.1 2.1 0 0 0 0-.2A25.5 25.5 0 0 0 50 12.5a2.1 2.1 0 0 0-.2 0zm.2 10.2c8 0 14.5 6.6 14.5 14.7 0 8-6.5 14.7-14.5 14.7s-14.5-6.6-14.5-14.7c0-8 6.5-14.7 14.5-14.7z"
      overflow="visible"
      fill={fill}
    />
  </svg>
);

MapPin.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

MapPin.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#fff',
};

export default MapPin;
