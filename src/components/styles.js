import styled from "styled-components";

export const AppHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const AppContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 10px auto;
`;

export const ListingGroups = styled.div`
  margin-top: 30px;
  h2 {
    text-align: left;
  }
`;

export const HeroSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: #a4a2a2;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: #a4a2a2;
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #c2baba;
  color: #7e7979;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;

  svg {
    margin-right: 5px;
  }
`;
