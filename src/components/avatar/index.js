import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImgWrapper = styled.div`
  img {
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
  }
`;

const Avatar = ({ img, width, height }) => (
  <ImgWrapper width={width} height={height}>
    <img src={img} alt="listing img" />
  </ImgWrapper>
);

Avatar.propTypes = {
  img: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Avatar.defaultProps = {
  img: "",
  width: "70px",
  height: "70px"
};

export default Avatar;
