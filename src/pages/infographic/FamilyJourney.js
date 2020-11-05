import React from 'react';
import styled from 'styled-components';
import colors from './colors';

// Components
import SchoolsPartnerCircle from './circles/SchoolsPartnerCircle';

// icons
import IconFamily from '../../assets/icons/IconFamily.svg';
import IconKindergarten from '../../assets/icons/IconKindergarten.svg';

const AllPartsInfographic = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

//Family
const ContainerFamily = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 2;

  /* @media (max-width: 425px) {
    width: auto;
    left: 1.5rem;
  } */
`;
const Family = styled.div`
  width: 100px;
  height: 100px;
  background: ${colors.white};
  border: 4px solid ${colors.primaryColorViolet};
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 70px;
    height: 70px;
    right: 1.5rem;
  }
`;
const TitleFamily = styled.h2`
  width: 100%;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: ${colors.primaryColorViolet};
`;
const FamilyIcon = styled.img`
  width: 60%;
`;

// Origem School
const SchoolOrigin = styled.div`
  width: 100px;
  position: absolute;
  top: 22vh;
  left: 0;
  z-index: 2;

  @media (max-width: 425px) {
    top: 25vh;
  }
`;
const IconSchoolOrigin = styled.div`
  width: 100px;
  height: 100px;
  background: ${colors.grayQuaternary};
  border: 4px solid ${colors.primaryColorYellow};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;
const TextSchoolOrigin = styled.div`
  margin-top: 10px;
  text-align: center;
`;
const TitleSchool = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.secondaryColorYellow};
`;
const SubTitleSchool = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${colors.secondaryColorYellow};
`;

const ConnectionDiagonal = styled.div`
  width: 50%;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 11rem;
  left: 1rem;
  z-index: 1;
  transform: rotate(150deg);

  @media (max-width: 425px) {
    width: 150px;
    top: 20vh;
    transform: rotate(125deg);
  }
`;
const ConnectionHorizontal = styled.div`
  width: 50%;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 25vh;
  transform: rotate(90deg);

  @media (max-width: 425px) {
    width: 170px;
    top: 9rem;
    right: 2rem;
    transform: rotate(45deg);
  }
`;

// Selected School
const SelectedSchool = styled.div`
  width: 150px;
  height: 150px;
  background: ${colors.grayQuaternary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  bottom: 20vh;
  z-index: 2;

  @media (max-width: 425px) {
    width: 110px;
    height: 110px;

    bottom: auto;
    left: auto;
    top: 22vh;
    right: 0;
  }
`;
const NumberSelectedSchool = styled.h3`
  color: ${colors.tertiaryColorPink};
  font-size: 50px;
  font-weight: Bold;

  @media (max-width: 425px) {
    font-size: 40px;
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
  font-size: 14px;
  font-weight: Medium;

  @media (max-width: 425px) {
    text-align: center;
  }
`;
const SpanSelectedSchool = styled.span`
  color: ${colors.primaryColorPink};
  font-size: 10px;
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
  const width = props.amountSchools > 13 ? '600px' : '500px';
  return (
    <AllPartsInfographic width={width}>
    
      <ContainerFamily>
        <TitleFamily>Família Silva</TitleFamily>
        <Family>
          <FamilyIcon src={IconFamily} />
        </Family>
      </ContainerFamily>
      
      <ConnectionDiagonal />

      <SchoolOrigin>
        <IconSchoolOrigin>
          <img src={IconKindergarten} />
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
            // style={}
            amountSchools={props.amountSchools}
            list={props.list}
            logged={props.logged}
            sizeCircle={() => '250px'}
          />
        </ContainerSchoolCircle>
    </AllPartsInfographic>
  )
};

export default FamilyJourney;
