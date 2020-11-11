import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

// Components
import SchoolsPartnerCircle from './circles/SchoolsPartnerCircle';

// icons
import IconFamily from '../../assets/icons/IconFamily.svg';
import IconKindergarten from '../../assets/icons/IconKindergarten.svg';

const AllPartsInfographic = styled.div`
  width: 100%;
  height: 80%;
  min-height: 31.25rem;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

//Family
const ContainerFamily = styled.div`
  min-width: 6.25rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 2;
`;
const Family = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background: ${colors.white};
  border: .25rem solid ${colors.primaryColorViolet};
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 4.375rem;
    height: 4.375rem;
    right: 1.5rem;
  }
`;
const TitleFamily = styled.h2`
  width: 100%;
  margin-bottom: 1.875rem;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
  color: ${colors.primaryColorViolet};
`;
const FamilyIcon = styled.img`
  width: 60%;
`;

// Origem School
const SchoolOrigin = styled.div`
  width: 6.25rem;
  position: absolute;
  top: 13rem;
  left: 0;
  z-index: 2;

  @media (max-width: 425px) {
    top: 25vh;
  }
`;
const IconSchoolOrigin = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background: ${colors.grayQuaternary};
  border: .25rem solid ${colors.primaryColorYellow};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 5rem;
    height: 5rem;
  }
`;
const TextSchoolOrigin = styled.div`
  margin-top: .625rem;
  text-align: center;
`;
const TitleSchool = styled.h3`
  font-size: .875rem;
  font-weight: 500;
  color: ${colors.secondaryColorYellow};
`;
const SubTitleSchool = styled.p`
  font-size: .625rem;
  font-weight: 500;
  color: ${colors.secondaryColorYellow};
`;

const ConnectionDiagonal = styled.div`
  width: 50%;
  height: .9375rem;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 11rem;
  left: 1rem;
  z-index: 1;
  transform: rotate(150deg);

  @media (max-width: 425px) {
    width: 9.375rem;
    top: 20vh;
    transform: rotate(125deg);
  }
`;
const ConnectionHorizontal = styled.div`
  width: 50%;
  height: .9375rem;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 14rem;
  transform: rotate(90deg);

  @media (max-width: 425px) {
    width: 10.625rem;
    top: 9rem;
    right: 2rem;
    transform: rotate(45deg);
  }
`;

// Selected School
const SelectedSchool = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  background: ${colors.grayQuaternary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 20rem;
  z-index: 2;

  @media (max-width: 425px) {
    width: 1.625rem;
    height: 1.625rem;

    bottom: auto;
    left: auto;
    top: 22vh;
    right: 0;
  }
`;
const NumberSelectedSchool = styled.h3`
  color: ${colors.tertiaryColorPink};
  font-size: 3.125rem;
  font-weight: Bold;

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
`;
const TextSelectedSchool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ParagraphSelectedSchool = styled.p`
  color: ${colors.primaryColorPink};
  font-size: .875rem;
  font-weight: Medium;

  @media (max-width: 425px) {
    text-align: center;
  }
`;
const SpanSelectedSchool = styled.span`
  color: ${colors.primaryColorPink};
  font-size: .625rem;
  font-weight: Medium;

  @media (max-width: 425px) {
    margin-bottom: 0.5rem;
  }
`;
const ContainerSchoolCircle = styled.div`
  position: absolute;
  right: 0;

  @media (max-width: 425px) {
    right: 15vw;
    bottom: 0;
  }
`;

const FamilyJourney = (props) => {
  return (
    <AllPartsInfographic>
      <ContainerFamily>
        <TitleFamily>Família Silva</TitleFamily>
        <Family>
          <FamilyIcon src={IconFamily} />
        </Family>
      </ContainerFamily>
      <ConnectionDiagonal />
      <SchoolOrigin>
        <IconSchoolOrigin>
          <img src={IconKindergarten} alt='Escola de origem' />
        </IconSchoolOrigin>
        <TextSchoolOrigin>
          <TitleSchool>Escola Infantil</TitleSchool>
          <SubTitleSchool>Origem</SubTitleSchool>
        </TextSchoolOrigin>
      </SchoolOrigin>
      <ConnectionHorizontal />
      <SelectedSchool>
        <NumberSelectedSchool>
          {props.elementarySchool}
        </NumberSelectedSchool>
        <TextSelectedSchool>
          <ParagraphSelectedSchool>
            Escola Fundamental
          </ParagraphSelectedSchool>
          <SpanSelectedSchool>
            Selecionadas
          </SpanSelectedSchool>
        </TextSelectedSchool>
      </SelectedSchool>
        <ContainerSchoolCircle>
          <SchoolsPartnerCircle
            amountSchools={props.amountSchools}
            list={props.list}
            logged={props.logged}
            sizeCircle={() => '15.625rem'}
          />
        </ContainerSchoolCircle>
    </AllPartsInfographic>
  )
};

export default FamilyJourney;
