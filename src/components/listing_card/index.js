import React from "react";
import Avatar from "../avatar";
import styled from "styled-components";
import get from "lodash.get";

const CardWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListingCard = ({ listing }) => (
  <CardWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <div> {listing.name} </div>
    <div> {listing.city} </div>
    <div> {listing.rating} </div>
  </CardWrapper>
);

export default ListingCard;
