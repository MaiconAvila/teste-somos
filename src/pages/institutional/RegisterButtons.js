import React from 'react';
import styled from 'styled-components';

// Components
import colors from './Colors';

// Assets
import IAmFamily from '../../assets/icons/IconIAmFamily.svg';
import IAmSchool from '../../assets/icons/IconIAmSchool.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsWelcome = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const ButtonFamily = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const IconFamily = styled.img`
  position: absolute;
  top: -2rem;
  right: 40%;

  @media (max-width: 768px) {
    top: -3rem;
    right: 35%;
  }

  @media (max-width: 414px) {
    top: -2.7rem;
    right: 33%;
  }

  @media (max-width: 360px) {
    top: -2.7rem;
    right: 30%;
  }

  @media (max-width: 320px) {
    right: 28%;
  }
`;

const ButtonIAmFamily = styled.button`
  height: 100px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.primaryColorViolet};
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #707070;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const ButtonSchool = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const IconSchool = styled.img`
  position: absolute;
  top: -2rem;
  right: 40%;

  @media (max-width: 768px) {
    top: -3rem;
    right: 35%;
  }

  @media (max-width: 414px) {
    top: -2.7rem;
    right: 33%;
  }

  @media (max-width: 360px) {
    top: -2.7rem;
    right: 30%;
  }

  @media (max-width: 320px) {
    right: 28%;
  }
`;

const ButtonIAmSchool = styled.button`
  height: 100px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.primaryColorPink};
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #707070;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const RegisterButtons = () => {

  return (
    <Container>
      <ButtonsWelcome>
        <ButtonFamily>
          <IconFamily src={IAmFamily}/>
          <ButtonIAmFamily>Sou Família</ButtonIAmFamily>
        </ButtonFamily>
        <ButtonSchool>
          <IconSchool src={IAmSchool}/>
          <ButtonIAmSchool>Sou Escola</ButtonIAmSchool>
        </ButtonSchool>
      </ButtonsWelcome>
    </Container>
  );
}

export default RegisterButtons;
