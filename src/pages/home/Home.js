import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from './Map';

// Components
import Infographic from '../infographic/Infographic';

// Assets
import loaderMap from '../../assets/images/map_loading.gif';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4.6875rem);
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    height: auto;
    flex-direction: column;
    overflow-x: scroll;
  }
`;
const Loader = styled.div`
  width: 40%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ImageLoader = styled.img`
  width: 50%;
`;
const TextLoader = styled.p`
  font: 1.25rem bold;
  color: #E03D72;
`;
function Home(props) {
  const [sizeMap, setSizeMap] = useState({
    width: (window.innerWidth / 100) * 40,
    height: window.innerHeight - 75
  });

  useEffect(() => {
    const getSizeMap = () => {
      setSizeMap({
        width: (window.innerWidth / 100) * 40,
        height: window.innerHeight - 75
      })
    }
    window.addEventListener('resize', getSizeMap)
    return () => {
      window.removeEventListener('resize', getSizeMap)
    }
  });

  return (
    <Container>
      <Infographic />
      {props.location && props.bounds && sizeMap
        ? (
          <Map
            location={props.location}
            bounds={props.bounds}
            sizeMap={sizeMap}
          />
        )
        : (
          <Loader>
            <ImageLoader src={loaderMap} />
            <TextLoader>
              Carregando Mapa...
            </TextLoader>
          </Loader>
        )
      }
    </Container>
  );
}

export default Home;
