import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import colors from './Colors';

const Container = styled.div`
  width: 100%;
`;

const TextWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8.6rem;

  @media (max-width: 425px) {
    align-items: center;
  }
`;

const TitleWelcome = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${colors.secondaryColorGray};

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    width: 80%;
    z-index: 1;
    text-align: center;
  }
`;

const SubTitleWelcome = styled.h2`
  width: 285px;
  font-size: 1rem;
  font-weight: 300;
  margin: 1.4rem 0 2rem 0;
  color: ${colors.secondaryColorGray};

  @media (max-width: 425px) {
    text-align: center;
  }
`;

const ButtonNetwork = styled.button`
  width: ${props => props.width === 'family' ? '213px' : '127px'};
  height: 45px;
  font-size: 1rem;
  font-weight: medium;
  color: ${colors.white};
  background: ${props => props.background};
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const WelcomeConnected = () => {

  const [typeUser] = useState('family')
  // typeUser: family, partnershipSchool, kindergarten

  const renderTextNetwork = () => {
    switch (typeUser) {
      case 'family':
        return 'Ver Rede da sua Região'
      case 'partnershipSchool':
        return 'Ver sua Rede'
      case 'kindergarten':
        return 'Ver sua Rede'
    }
  }

  const renderBackgroundNetwork = () => {
    switch (typeUser) {
      case 'family':
        return `${colors.primaryColorViolet}`
      case 'partnershipSchool':
        return `${colors.primaryColorPink}`
      case 'kindergarten':
        return `${colors.secondaryColorYellow}`
    }
  }

  return (
    <Container>
      <TextWelcome>
        <TitleWelcome>Bem Vindos à Rede de Benefícios</TitleWelcome>
        <SubTitleWelcome>Entre na Rede SOMOS, matricule seus filhos nas melhores escolas e receba benefícios por isso!</SubTitleWelcome>
        <ButtonNetwork
          background={renderBackgroundNetwork}
          width={typeUser}>
          {renderTextNetwork()}
        </ButtonNetwork>
      </TextWelcome>
    </Container>
  );
}

export default WelcomeConnected;
