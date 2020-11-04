import React from 'react';
import styled from 'styled-components';
import colors from './colors';

// Components
import CircleSchoolsPartner from './CircleSchoolsPartner';

// icons
import IconFamily from '../../assets/icons/IconFamily.svg';
import IconKindergarten from '../../assets/icons/IconKindergarten.svg';

const AllPartsInfographic = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 2.4rem;
  width: ${props => props.width};

  @media (max-width: 425px) {
    width: 330px;
  }
`;

const ContainerFamily = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 175px;
    left: 1.5rem;
  }
`;
const TitleContainerFamily = styled.h2`
  color: ${colors.primaryColorViolet};
  font-size: 20px;
  text-align: end;
  font-weight: SemiBold;
`;
const SchoolOrigin = styled.div`
  width: 100px;
  z-index: 2;
`;
const IconSchoolOrigin = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  border: 4px solid ${colors.primaryColorYellow};
  background: ${colors.grayQuaternary};
  border-radius: 50%;

  @media (max-width: 425px) {
    width: 80px;
    height: 80px;
    position: relative;
    top: 5rem;
    right: 0.5rem;
    margin-top: 0;
    margin-bottom: 5.5rem;
  }
`;
const TextSchoolOrigin = styled.div`
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 425px) {
    margin-left: -3rem;
  }
`;
const TitleSchool = styled.h3`
  font-size: 14px;
  font-weight: Medium;
  color: ${colors.secondaryColorYellow};
`;
const ParagraphSchool = styled.p`
  font-size: 10px;
  font-weight: Medium;
  color: ${colors.secondaryColorYellow};
`;
const Family = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3rem;
  right: 0;
  border: 4px solid ${colors.primaryColorViolet};
  background: ${colors.white};
  border-radius: 50%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 70px;
    height: 70px;
    right: 1.5rem;
  }
`;
const FamilyIcon = styled.img`
  
`;
const ConnectionDiagonal = styled.div`
  width: 250px;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 12rem;
  right: -1.5rem;
  transform: rotate(-62deg);

  @media (max-width: 425px) {
    top: 12rem;
    width: 170px;
    right: -1.8rem;
    transform: rotate(-90deg);
  }
`;
const ConnectionHorizontal = styled.div`
  width: 250px;
  height: 15px;
  background: ${colors.grayQuaternary};
  position: absolute;
  top: 8rem;
  right: 5rem;
  transform: rotate(-9deg);

  @media (max-width: 425px) {
    width: 100px;
    right: 3rem;
    top: 6rem;
    transform: rotate(-41deg);
  }
`;
const SelectedSchool = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${colors.grayQuaternary};
  border-radius: 50%;
  margin-left: 37%;
  z-index: 2;

  @media (max-width: 425px) {
    width: 110px;
    height: 110px;
    margin-left: 33%;
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

const FamilyJourney = (props) => {
  const width = props.amountSchools > 13 ? '600px' : '500px';
  return (
    <AllPartsInfographic width={width}>
      <ContainerFamily>
        <TitleContainerFamily>Família Silva</TitleContainerFamily>
        <SchoolOrigin>
          <IconSchoolOrigin><img src={IconKindergarten} /></IconSchoolOrigin>
          <TextSchoolOrigin>
            <TitleSchool>Escola Infantil</TitleSchool>
            <ParagraphSchool>Origem</ParagraphSchool>
          </TextSchoolOrigin>
        </SchoolOrigin>
        <Family>
          <FamilyIcon src={IconFamily} />
        </Family> 
        <ConnectionDiagonal></ConnectionDiagonal>
        <ConnectionHorizontal></ConnectionHorizontal>
        <SelectedSchool>
          <NumberSelectedSchool>{props.elementarySchool}</NumberSelectedSchool>
          <TextSelectedSchool>
            <ParagraphSelectedSchool>Escola Fundamental</ParagraphSelectedSchool>
            <SpanSelectedSchool>Selecionadas</SpanSelectedSchool>
          </TextSelectedSchool>
        </SelectedSchool>
      </ContainerFamily>
      <CircleSchoolsPartner
        amountSchools={props.amountSchools}
        list={props.list}
        logged={props.logged}
        sizeCircle={props.sizeCircle}
      />
    </AllPartsInfographic>
  )
};

export default FamilyJourney;
