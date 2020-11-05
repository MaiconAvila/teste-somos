import React from 'react';
import styled from 'styled-components';

// Components
import Infographic from '../infographic/Infographic';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;

  @media (max-width: 425px) {
    height: auto;
    flex-direction: column;
    overflow-x: scroll;
  }
`;

const Map = styled.div`
  width: 40%;
  height: 100%;
  background: #F7F7F7;
  border-left: solid 1px #CFD2D9;
  
  @media (max-width: 425px) {
    width: 100%;
    height: calc(100vh - 75px);
  }
`;

function Home() {
  return (
    <Container>
      <Infographic />
      <Map />
    </Container>
  );
}

export default Home;
