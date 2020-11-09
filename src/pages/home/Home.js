import React from 'react';
import styled from 'styled-components';

// Components
import Footer from '../../components/footer/Footer';
import Infographic from '../infographic/Infographic';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 75px);
  /* padding: 0 70px; */
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
      <Footer/>
    </Container>
  );
}

export default Home;
