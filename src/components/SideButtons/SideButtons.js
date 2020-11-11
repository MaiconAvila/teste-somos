import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

// Assets
import IconHome from '../../assets/icons/IconHome.svg';
import IconConnection from '../../assets/icons/IconConnection.svg';
import IconCards from '../../assets/icons/IconCards.svg';

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4.5rem;
  left: 0;
  z-index: 5;
  box-shadow: 0 .1875rem .375rem #00000029;
  border-radius: .375rem;
`;

const Icon = styled.img`
  width: 1.5625rem;
`;

const ButtonHome = styled.span`
  width: 2.1875rem;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border: none;
  color: ${colors.white};
  background: ${colors.gray};
  border-top-right-radius: .375rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 1.875rem;
    height: 2.5rem;
  }
`;

const ButtonConnection = styled.span`
  width: 2.1875rem;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border-top: .0625rem solid ${colors.white};
  border-bottom: .0625rem solid ${colors.white};
  color: ${colors.white};
  background: ${colors.gray};
  cursor: pointer;

  @media (max-width: 425px) {
    width: 1.875rem;
    height: 2.5rem;
  }
`;

const ButtonCards = styled.span`
  width: 2.1875rem;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border: none;
  color: ${colors.white};
  background: ${colors.gray};
  border-bottom-right-radius: .375rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 1.875rem;
    height: 2.5rem;
  }
`;

const SideButtons = (props) => {
  const goToHome = () => {
    props.history.replace('/institutional/');
  }
  const goToInfographic = () => {
    props.history.replace('/home/');
  }

  return (
    <ContainerButtons>
      <ButtonHome onClick={goToHome} >
        <Icon src={IconHome} alt='Link no menu para home' />
      </ButtonHome>
      <ButtonConnection onClick={goToInfographic} >
        <Icon src={IconConnection} alt='Link no menu para infográfico' />
      </ButtonConnection>
      <ButtonCards>
        <Icon src={IconCards} alt='Link no menu para cards das escolas' />
      </ButtonCards>
    </ContainerButtons>
  )
}

export default SideButtons;
