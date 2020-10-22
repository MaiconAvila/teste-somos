import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [title] = useState('Bem vindo a Rede de Benefícios');

  return (
    <Container>
      {/* Trocar o h1 pelos componentes */}
      <h1>{title}</h1>
    </Container>
  );
}

export default Home;
