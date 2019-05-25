import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { locate } from '../actions';
import logo from '../assets/logo.png';
import ListingCards from './listing_cards';
import Locate from '../icons/locate';
import MapPin from '../icons/map-pin';
import {
  AppHeader,
  AppWrapper,
  AppContent,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton,
} from './styles';

const regionTypes = ['delivery', 'dispensary', 'doctor'];
const regionLabels = {
  delivery: 'Deliveries',
  dispensary: 'Dispensaries',
  doctor: 'Doctors',
};

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loadingTimer: 0,
    };
  }

  locateMe() {
    const { dispatch } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(locate(position.coords));
      });
    }
  };

  render() {
    const { isLocating, location, regions, error } = this.props;

    const getLabel = (listings, label) => {
      if (get(listings, 'listings').length) {
        return (
          <div key={label}>
            <strong> {label} </strong>
          </div>
        );
      }
      return <div />;
    };

    return (
      <AppWrapper>
        <AppHeader>
          <img src={logo} alt="weedmaps logo" />
        </AppHeader>
        <HeroSection>
          <ContentContainer>
            <LocationSection>
              <h2>
                <MapPin fill={'#7e7979'} width={'60px'} height={'40px'} />
                <span> {location ? location.name : ''} </span>
                <span> {isLocating && !location ? '...locating' : ''} </span>
              </h2>
              <LocateButton onClick={this.locateMe}>
                <Locate fill={'#7e7979'} />
                <span> Locate Me </span>
              </LocateButton>
            </LocationSection>
            <TextContent>
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut
              enim ad minim veniam, quis.
            </TextContent>
          </ContentContainer>
        </HeroSection>
        <AppContent>
          {error && <div> {error.message} </div>}
          {regions && (
            <React.Fragment>
              {regionTypes.map(regionType => (
                <ListingGroups key={regionType}>
                  <h2>
                    {getLabel(regions[regionType], regionLabels[regionType])}
                  </h2>
                  <ListingCards
                    listings={get(regions[regionType], 'listings')}
                  />
                </ListingGroups>
              ))}
            </React.Fragment>
          )}
        </AppContent>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => state.location;

App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any,
  error: PropTypes.object,
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {},
};

export default connect(mapStateToProps)(App);
