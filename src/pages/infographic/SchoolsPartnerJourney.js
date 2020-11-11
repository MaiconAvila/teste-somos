import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

// icons
import IconPartner from '../../assets/icons/IconPartner.svg';

const ScreenElementarySchool = styled.div`
  width: 100%;
  height: 100%;
  min-height: 31.25rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const TitleElementarySchool = styled.h2`
  text-align: center;
  color: ${props => props.color === 'isChildren' ? `${colors.primaryColorYellow}` : `${colors.primaryColorPink}`};
  font-size: 1.25rem;
  font-weight: SemiBold;
`;
const CircleSchool = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3rem;
  border: ${props => props.border === 'isChildren' ? `.25rem solid ${colors.primaryColorYellow}` : `.25rem solid ${colors.primaryColorPink}`};
  background: ${colors.white};
  border-radius: 50%;
  z-index: 2;

  img {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 5rem;
    height: 5rem;
  }
`;
const ConnectionInterested = styled.div`
  width: 38%;
  height: .9375rem;
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
  height: .9375rem;
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
  width: 9.375rem;
  height: 9.375rem;
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
    width: 8.125rem;
    height: 8.125rem;
    top: 25vh;
    left: 2vw;
  }
`;
const CircleFamilyRegistered = styled.div`
  width: 9.375rem;
  height: 9.375rem;
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
    width: 8.125rem;
    height: 8.125rem;
    top: 25vh;
    right: 2vw;
  }
`;
const NumberFamily = styled.h3`
  color: ${colors.primaryColorViolet};
  font-size: 3.125rem;
  font-weight: Bold;

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
`;
const ParagraphFamily = styled.p`
  color: ${colors.primaryColorViolet};
  font-size: .875rem;
  font-weight: Medium;
`;
const SpanFamily = styled.span`
  color: ${colors.primaryColorViolet};
  font-size: .625rem;
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
