import React from 'react';
import styled from 'styled-components';
import colors from './colors';

// icons
import IconPartner from '../../assets/icons/IconPartner.svg';

const ScreenElementarySchool = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const TitleElementarySchool = styled.h2`
  text-align: center;
  color: ${props => props.color === 'isChildren' ? `${colors.primaryColorYellow}` : `${colors.primaryColorPink}`};
  font-size: 20px;
  font-weight: SemiBold;
`;
const CircleSchool = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3rem;
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
  }
`;
const ConnectionInterested = styled.div`
  width: 38%;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 13rem;
  left: 7rem;
  transform: rotate(-49deg);

  @media (max-width: 425px) {
    width: 50%;
    top: 22vh;
    left: 9vw;
  }
`;
const ConnectionRegistered = styled.div`
  width: 38%;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 13rem;
  right: 7rem;
  transform: rotate(49deg);

  @media (max-width: 425px) {
    width: 50%;
    top: 22vh;
    right: 9vw;
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
  top: 17rem;
  left: 5rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 130px;
    height: 130px;
    top: 25vh;
    left: 2vw;
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
  top: 17rem;
  right: 5rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 130px;
    height: 130px;
    top: 25vh;
    right: 2vw;
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
      <TitleElementarySchool>
        Escola Ataufo
      </TitleElementarySchool>
      <CircleSchool>
        <img src={IconPartner} alt='Escola Fundamental Somos' />
      </CircleSchool>
      <ConnectionInterested />
      <CircleFamilyInterested>
        <NumberFamily>{props.familyInterested}</NumberFamily>
        <ParagraphFamily>Famílias</ParagraphFamily>
        <SpanFamily>Interessadas</SpanFamily>
      </CircleFamilyInterested>
      <ConnectionRegistered />
      <CircleFamilyRegistered>
        <NumberFamily>{props.familyRegistered}</NumberFamily>
        <ParagraphFamily>Famílias</ParagraphFamily>
        <SpanFamily>Matriculadas</SpanFamily>
      </CircleFamilyRegistered>
    </ScreenElementarySchool>
  )
};

export default SchoolsPartnerJourney;
