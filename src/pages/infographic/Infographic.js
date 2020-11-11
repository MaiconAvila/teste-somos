import React, { useState } from 'react';
import styled from 'styled-components';
import colors from './Colors';

// Components
import InitialJourney from './InitialJourney';
import FamilyJourney from './FamilyJourney';
import SchoolsPartnerJourney from './SchoolsPartnerJourney';
import KindergartenJourney from './KindergartenJourney';

const Container = styled.div`
  width: 60%;
  min-width: 40.625rem;
  min-height: 100%;
  background: #D3D3D3;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  
  @media (max-width: 1100px) {
    width: 100%;
    min-width: auto;
    height: calc(100vh - 4.6875rem);
  }
`;
const ContainerInfographic = styled.div`
  width: 100%;
  max-width: 43.75rem;
  height: 100%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    max-width: none;
  }
`;
const TotalDataInfographic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: ${props => props.width === 'isInitial' ? '17.8125rem' : '20rem'};
  background: ${colors.grayQuaternary};
  border-radius: .375rem;
  padding: 1.5rem 1rem 1rem 1rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: .5rem;
  text-align: center;
  width: 50%;
`;
const ParagraphData = styled.p`
  color: ${colors.graySecondary};
`;
const FirstData = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.color};
`;
const SecondData = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.color};
`;

const Infographic = () => {
  const [logged] = useState('isInitial');
  // logged: isInitial - isFamily - isElementary - isChildren
  const [amountFamily] = useState(2);
  const [amountSchools] = useState(4);
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
      return '16.5625rem'
    }
    if (size < 180) {
      return '11.25rem'
    }
    return `${size / 16}rem`
  };

  const renderDynamicInfographic = () => {
    switch(logged) {
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
      default:
        return (
          <InitialJourney
            logged={logged}
            amountFamily={amountFamily}
            amountSchools={amountSchools}
            list={list}
            sizeCircle={sizeCircle}
          />
        )
    }
  }

  const textFirstParagraphData = () => {
    switch (logged) {
      case 'isInitial':
        return 'famílias'
      case 'isFamily':
        return 'escolas fundamentais ativas e selecionadas';
      case 'isElementary':
        return 'escolas infantis';
      case 'isChildren':
        return 'famílias ativas';
      default:
        return null;
    }
  }

  const colorFirstData = () => {
    switch (logged) {
      case 'isFamily':
        return `${colors.primaryColorPink}`
      case 'isElementary':
        return `${colors.primaryColorYellow}`
      case 'isChildren':
        return `${colors.primaryColorViolet}`
      default:
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
      default:
        return null;
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
      default:
        return null;
    }
  }

  const colorSecondData = () => {
    switch (logged) {
      case 'isFamily':
        return `${colors.primaryColorPink}`
      case 'isElementary':
        return `${colors.primaryColorViolet}`
      case 'isChildren':
        return `${colors.primaryColorViolet}`
      default:
        return `${colors.primaryColorPink}`
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
          {
            (
              logged === 'isElementary' && familyInterested + familyRegistered
            ) || (
              logged === 'isChildren' && '0,3%'
            ) || (
              logged === 'isInitial' && amountSchools
            ) || (
              'isFamily' && amountSchools
            )
          }
          </SecondData>
        </Data>
      </TotalDataInfographic>
    )
  }

  return (
    <Container>
      <ContainerInfographic>
        {renderDynamicInfographic()}
        {renderOverview()}
      </ContainerInfographic>
    </Container>
  );
};

export default Infographic;
