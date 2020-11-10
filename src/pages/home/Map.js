import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact, { fitBounds } from 'google-map-react';

// Components
import Marker from './Marker';

// Assets
import pin from '../../assets/images/pin_gray.svg';
import iconPin from '../../assets/images/pin_pink.svg';

// Styles
const Container = styled.div`
  width: 40%;
  min-height: calc(100vh - 4.6875rem);
  margin-left: auto;
  border-left: .5px solid #CFD2D9;
`;

const Map = (props) => {
  const [center, setCenter] = useState({});
  const [zoom, setZoom] = useState(1);
  const [escolas_MOCK] = useState([
    {
      id: 1,
      name: 'CEFEM-Centro Educacional Fonseca e Martins',
      address: 'R. Itaque, 161 - Santíssimo, Rio de Janeiro - RJ, 23094-350',
      location: {
        lat: -22.872418,
        lng: -43.517895
      },
      show: false
    },
    {
      id: 2,
      name: 'Colégio Gunnar Vingren',
      address: 'Estr. do Lameirão, 673 - Campo Grande, Rio de Janeiro - RJ, 23092-031, Brasil',
      location: {
        lat: -22.877228,
        lng: -43.525259
      },
      show: false
    },
    {
      id: 3,
      name: 'Educandário da Posse',
      address: 'Estrada da Posse, 678 - Santíssimo, Rio de Janeiro - RJ, 23088-000',
      location: {
        lat: -22.875187,
        lng: -43.525253
      },
      show: false
    },
  ])

  useEffect(() => {
    setCenter(props.location);
  }, [props.location]);
  useEffect(() => {
    const fit = fitBounds(props.bounds, props.sizeMap);
    setZoom(fit.zoom > 16 ? 16 : fit.zoom);
  }, [props.bounds, props.sizeMap]);

  const schoolsMarkers = () => (
    escolas_MOCK.map(escola => {
      return (
        <Marker
          small
          key={escola.id}
          info={{
            name: escola.name,
            address: escola.address,
          }}
          lat={escola.location.lat}
          lng={escola.location.lng}
          pin={iconPin}
        />
      )
    })
  );

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        center={center}
        zoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          pin={pin}
        />
        {schoolsMarkers()}
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
