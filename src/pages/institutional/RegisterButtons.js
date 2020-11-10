import React from 'react';
import styled from 'styled-components';

// Components
import colors from './Colors';

// Assets
import IAmFamily from '../../assets/icons/IconIAmFamily.svg';
import IAmSchool from '../../assets/icons/IconIAmSchool.svg';

const Container = styled.div`
  width: 850px;
  height: 150px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    align-items:  center;
    justify-content: center;
  }
`;


const ButtonFamily = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

const IconFamily = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  position: absolute;
  top: -2rem;
  right: 40%;

  @media (max-width: 768px) {
    right: calc(50% - 1.875rem);
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
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconSchool = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  position: absolute;
  top: -2rem;
  right: 40%;

  @media (max-width: 768px) {
    right: calc(50% - 1.875rem);
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
      <ButtonFamily>
        <IconFamily src={IAmFamily}/>
        <ButtonIAmFamily>Sou Família</ButtonIAmFamily>
      </ButtonFamily>
      <ButtonSchool>
        <IconSchool src={IAmSchool}/>
        <ButtonIAmSchool>Sou Escola</ButtonIAmSchool>
      </ButtonSchool>
    </Container>
  );
}

export default RegisterButtons;
