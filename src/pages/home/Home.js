import React from 'react';
import styled from 'styled-components';

// Components
import Infographic from '../infographic/Infographic';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  padding: 0 70px;
  background: #D3D3D3;

  h1 {
    width: 100%;
    padding: 15px;
    text-align: center;
  }
`;

function Home() {
  return (
    <Container>
      <Infographic />
    </Container>
  );
}

export default Home;
