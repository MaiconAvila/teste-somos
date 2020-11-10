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
  top: 72px;
  left: 0;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
`;

const ButtonHome = styled.span`
  width: 35px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border: none;
  color: ${colors.white};
  background: ${colors.gray};
  border-top-right-radius: 6px;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 30px;
    height: 40px;
  }
`;

const ButtonConnection = styled.span`
  width: 35px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};
  color: ${colors.white};
  background: ${colors.gray};
  cursor: pointer;

  @media (max-width: 425px) {
    width: 30px;
    height: 40px;
  }
`;

const ButtonCards = styled.span`
  width: 35px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2%;
  border: none;
  color: ${colors.white};
  background: ${colors.gray};
  border-bottom-right-radius: 6px;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 30px;
    height: 40px;
  }
`;

const SideButtons = (props) => {
  return (
    <ContainerButtons>
      <ButtonHome>
        <img src={IconHome} alt='Link no menu para home' />
      </ButtonHome>
      <ButtonConnection>
        <img src={IconConnection} alt='Link no menu para infográfico' />
      </ButtonConnection>
      <ButtonCards>
        <img src={IconCards} alt='Link no menu para cards das escolas' />
      </ButtonCards>
    </ContainerButtons>
  )
}

export default SideButtons;
