import React from 'react';
import styled from 'styled-components';
import colors from './colors';

// icons
import IconPartner from '../../assets/icons/IconPartner.svg';

const ScreenElementarySchool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-bottom: 8rem;
`;
const TitleElementarySchool = styled.h2`
  text-align: center;
  color: ${props => props.color === 'isChildren' ? `${colors.primaryColorYellow}` : `${colors.primaryColorPink}`};
  font-size: 20px;
  font-weight: SemiBold;
`;
const ContainerElementarySchool = styled.div`
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
  top: 0;
  right: 12.5rem;
  margin-top: 3rem;
  border: ${props => props.border === 'isChildren' ? `4px solid ${colors.primaryColorYellow}` : `4px solid ${colors.primaryColorPink}`};
  background: ${colors.white};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 80px;
    height: 80px;
    right: 7.7rem;
  }
`;
const ConnectionInterested = styled.div`
  width: 250px;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 13rem;
  right: 15rem;
  transform: rotate(-49deg);

  @media (max-width: 425px) {
    width: 180px;
    top: 7.5rem;
    right: 7rem;
  }
`;
const ConnectionRegistered = styled.div`
  width: 250px;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 13rem;
  right: 1rem;
  transform: rotate(49deg);

  @media (max-width: 425px) {
    width: 180px;
    top: 9rem;
    right: 1rem;
  }
`;
const CircleFamilyInterested = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 12.4rem;
  left: -10rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 130px;
    height: 130px;
    top: 9.3rem;
    left: -5.9rem;
  }
`;
const CircleFamilyRegistered = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 3rem;
  left: 9rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 130px;
    height: 130px;
    left: 6rem;
    top: 1.1rem;
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

const SchoolsPartnerJourney = (props) => {
  return (
    <ScreenElementarySchool>
      <TitleElementarySchool>Escola Ataufo</TitleElementarySchool>
      <ContainerElementarySchool>
        <CircleSchool><img src={IconPartner}/></CircleSchool>
        <ConnectionInterested></ConnectionInterested>
        <ConnectionRegistered></ConnectionRegistered>
        <CircleFamilyInterested>
          <NumberFamily>{props.familyInterested}</NumberFamily>
          <ParagraphFamily>Famílias</ParagraphFamily>
          <SpanFamily>Interessadas</SpanFamily>
        </CircleFamilyInterested>
        <CircleFamilyRegistered>
          <NumberFamily>{props.familyRegistered}</NumberFamily>
          <ParagraphFamily>Famílias</ParagraphFamily>
          <SpanFamily>Matriculadas</SpanFamily>
        </CircleFamilyRegistered>
      </ContainerElementarySchool>
    </ScreenElementarySchool>
  )
};

export default SchoolsPartnerJourney;
