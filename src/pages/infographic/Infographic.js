import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from './colors';

// Components
import InitialJourney from './InitialJourney';
import FamilyJourney from './FamilyJourney';
import SchoolsPartnerJourney from './SchoolsPartnerJourney';
import KindergartenJourney from './KindergartenJourney';

// Icons
import IconHome from '../../assets/icons/IconHome.svg';
import IconConnection from '../../assets/icons/IconConnection.svg';
import IconCards from '../../assets/icons/IconCards.svg';

const Container = styled.div`
  width: 60%;
  height: 100%;
  background: #D3D3D3;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    height: calc(100vh - 75px);
  }
`;
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
const ContainerInfographic = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    max-width: none;
  }
`;
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
const TotalDataInfographic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: ${props => props.width === 'isInitial' ? '285px' : '320px'};
  background: ${colors.grayQuaternary};
  border-radius: 6px;
  padding: 1.5rem 1rem 1rem 1rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  text-align: center;
  width: 50%;
`;
const ParagraphData = styled.p`
  color: ${colors.graySecondary};
`;
const FirstData = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.color};
`;
const SecondData = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.color};
`;
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

const Infographic = () => {
  const [logged] = useState('isElementary');
  // logged: isInitial - isFamily - isElementary - isChildren
  const [amountFamily] = useState(10);
  const [amountSchools] = useState(3);
  const [elementarySchool] = useState(1);
  const [familyInterested] = useState(3);
  const [familyRegistered] = useState(2);
  const [childrenOrigin] = useState(6);
  const [childrenActive] = useState(2);

  const list = [];

  for (let i = 1; i <= amountSchools; i++) {
    list.push({
      id: i,
      element: `circ${i}`,
      type:'partnerSchools'
    });
  }

  for (let i = 1; i <= amountFamily; i++) {
    list.push({
      id: i,
      element: `circ${i}`,
      type:'family'
    });
  }

  list.forEach(item => {
    item.positionY = Math.floor(Math.random() * (80 - 8)) + 8;
    item.positionX = Math.floor(Math.random() * (80 - 8)) + 8;
  });

  const sizeCircle = (info) => {
    const size = info * 15;
    if (size > 265) {
      return '265px'
    }
    if (size < 180) {
      return '180px'
    }
    return `${size}px`
  };

  const renderDynamicInfographic = () => {
    switch(logged) {
      case 'isInitial':
        return (
          <InitialJourney
            logged={logged}
            amountFamily={amountFamily}
            amountSchools={amountSchools}
            list={list}
            sizeCircle={sizeCircle}
          />
        )
      case 'isFamily':
        return (
          <FamilyJourney
            elementarySchool={elementarySchool}
            amountSchools={amountSchools}
            list={list}
            logged={logged}
            sizeCircle={sizeCircle}
          />
        )
      case 'isElementary':
        return (
          <SchoolsPartnerJourney
            familyInterested={familyInterested}
            familyRegistered={familyRegistered}
          />
        )
      case 'isChildren':
        return (
          <KindergartenJourney
            logged={logged}
            childrenOrigin={childrenOrigin}
            childrenActive={childrenActive}
          />
        )
    }
  }

  const textFirstParagraphData = () => {
    switch (logged) {
      case 'isInitial':
        return 'famílias'
      case 'isFamily':
        return 'escolas fundamentais ativas e selecionadas'
      case 'isElementary':
        return 'escolas infantis'
      case 'isChildren':
        return 'famílias ativas'
    }
  }

  const colorFirstData = () => {
    switch (logged) {
      case 'isInitial':
        return `${colors.primaryColorViolet}`
      case 'isFamily':
        return `${colors.primaryColorPink}`
      case 'isElementary':
        return `${colors.primaryColorYellow}`
      case 'isChildren':
        return `${colors.primaryColorViolet}`
    }
  }

  const textFirstData = () => {
    switch (logged) {
      case 'isInitial':
        return amountFamily
      case 'isFamily':
        return elementarySchool
      case 'isElementary':
        return amountFamily
      case 'isChildren':
        return childrenActive
    }
  }

  const textSecondParagraphData = () => {
    switch (logged) {
      case 'isInitial':
        return 'Escolas fundamentais'
      case 'isFamily':
        return 'Escolas fundamentais ativas'
      case 'isElementary':
        return 'Famílias'
      case 'isChildren':
        return 'Seus alunos'
    }
  }

  const colorSecondData = () => {
    switch (logged) {
      case 'isInitial':
        return `${colors.primaryColorPink}`
      case 'isFamily':
        return `${colors.primaryColorPink}`
      case 'isElementary':
        return `${colors.primaryColorViolet}`
      case 'isChildren':
        return `${colors.primaryColorViolet}`
    }
  }

  const renderOverview = () => {
    return (
      <TotalDataInfographic width={logged}>
        <Data>
          <ParagraphData>
            <strong>total</strong> {textFirstParagraphData()}
          </ParagraphData>
          <FirstData
            color={colorFirstData}>
            {textFirstData()}
          </FirstData>
        </Data>
        <Data>
          <ParagraphData>
            <strong>{logged === 'isChildren' ? 'porcentagem' : 'total'}</strong> {textSecondParagraphData()}
          </ParagraphData>
          <SecondData
            color={colorSecondData}
          >
          {logged === 'isElementary' && familyInterested + familyRegistered || logged === 'isChildren' && '0,3%' || logged === 'isInitial' && amountSchools || 'isFamily' && amountSchools}</SecondData>
        </Data>
      </TotalDataInfographic>
    )
  }

  return (
    <Container>
      <ContainerButtons>
        <ButtonHome><img src={IconHome}/></ButtonHome>
        <ButtonConnection><img src={IconConnection}/></ButtonConnection>
        <ButtonCards><img src={IconCards}/></ButtonCards>
      </ContainerButtons>
      <ContainerInfographic>
        {/* <AllPartsInfographic width={width}> */}
          {renderDynamicInfographic()}
        {/* </AllPartsInfographic> */}
        {renderOverview()}
      </ContainerInfographic>
    </Container>
  );
};

export default Infographic;
