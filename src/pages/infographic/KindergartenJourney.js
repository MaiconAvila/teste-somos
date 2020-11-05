import React from 'react';
import styled from 'styled-components';
import colors from './colors';

// icons
import Iconkindergarten from '../../assets/icons/IconKindergarten.svg';

const ScreenElementarySchool = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleElementarySchool = styled.h2`
  text-align: center;
  color: ${props => props.color === 'isChildren' ? `${colors.primaryColorYellow}` : `${colors.primaryColorPink}`};
  font-size: 20px;
  font-weight: SemiBold;
`;
const ContainerElementarySchool = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CircleSchool = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6rem;
  border: ${props => props.border === 'isChildren' ? `4px solid ${colors.primaryColorYellow}` : `4px solid ${colors.primaryColorPink}`};
  background: ${colors.white};
  border-radius: 50%;
  z-index: 2;

  img {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 80px;
    height: 80px;
    /* right: 7.7rem; */
  }
`;
const ConnectionInterested = styled.div`
  width: 250px;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 15rem;
  left: 15vw;
  transform: rotate(-49deg);

  @media (max-width: 425px) {
    width: 180px;
    top: 30vh;
    /* right: 7rem; */
  }
`;
const ConnectionRegistered = styled.div`
  width: 250px;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 15rem;
  right: 15vw;
  transform: rotate(49deg);

  @media (max-width: 425px) {
    width: 180px;
    top: 30vh;
    /* right: 1rem; */
  }
`;
const CircleFamilyInterested = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 18rem;
  left: 13rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 130px;
    height: 130px;
    top: 40vh;
    /* left: -5.9rem; */
  }
`;
const CircleFamilyRegistered = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 18rem;
  right: 13rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 130px;
    height: 130px;
    top: 40vh;
    /* top: 1.1rem; */
  }
`;
const NumberFamily = styled.h3`
  color: ${colors.primaryColorViolet};
  font-size: 50px;
  font-weight: Bold;

  @media (max-width: 425px) {
    font-size: 40px;
  }
`;
const ParagraphFamily = styled.p`
  color: ${colors.primaryColorViolet};
  font-size: 14px;
  font-weight: Medium;
`;
const SpanFamily = styled.span`
  color: ${colors.primaryColorViolet};
  font-size: 10px;
  font-weight: Medium;
`;

const KindergartenJourney = (props) => {
  return (
    <ScreenElementarySchool>

      <TitleElementarySchool color={props.logged}>Escolinha Mariana</TitleElementarySchool>

      <ContainerElementarySchool>
        <CircleSchool border={props.logged}>
          <img src={Iconkindergarten} />
        </CircleSchool>
        
        <ConnectionInterested />

        <CircleFamilyInterested>
          <NumberFamily>{props.childrenOrigin}</NumberFamily>
          <ParagraphFamily>Famílias</ParagraphFamily>
          <SpanFamily>Origem</SpanFamily>
        </CircleFamilyInterested>

        <ConnectionRegistered />

        <CircleFamilyRegistered>
          <NumberFamily>{props.childrenActive}</NumberFamily>
          <ParagraphFamily>Famílias</ParagraphFamily>
          <SpanFamily>Já se matricularam</SpanFamily>
        </CircleFamilyRegistered>
      </ContainerElementarySchool>
    </ScreenElementarySchool>
  )
};

export default KindergartenJourney;
