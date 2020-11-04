import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from './colors';

// Components
import CircleSchoolsPartner from './CircleSchoolsPartner';
import FamilyCircle from './FamilyCircle';
import InitialJourney from './InitialJourney';
import FamilyJourney from './FamilyJourney';
import SchoolsPartnerJourney from './SchoolsPartnerJourney';
import KindergartenJourney from './KindergartenJourney';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
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

const ButtonSearch = styled.span`
  width: 35px;
  height: 50px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
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

// isFamily

// is Schools

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

const Infographic = () => {
  const [amountSchools] = useState(15);
  const [amountFamily] = useState(50);
  const [logged] = useState('isChildren');
  // logged: isInitial - isFamily - isElementary - isChildren
  const [elementarySchool] = useState(1)
  const [familyInterested] = useState(3)
  const [familyRegistered] = useState(2)
  const [childrenOrigin] = useState(6)
  const [childrenActive] = useState(2)
  const [width, setWidth] = useState('500px');

  useEffect(() => {
    if(logged === 'isFamily' && amountSchools > 13) {
      console.log('600px')
      setWidth('600px')
    } else {
      console.log('500px')
      setWidth('500px')
    }
  }, [logged, amountSchools]);

  // logged === 'isFamily' && amountSchools > 13 && '630px' || logged === 'isInitial' && '500px'

  // switch (logged) {
  //   case 'isFamily' && amountSchools > 13:
  //     return setWidth('600px')
  //   case 'isInitial':
  //     return setWidth('500px')
  // }

  const list = []

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
    const size = info * 16;
    if (size > 250) {
      return '250px'
    }
    if (size < 140) {
      return '140px'
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
        <ButtonHome />
        <ButtonConnection />
        <ButtonSearch />
      </ContainerButtons>
      <ContainerInfographic>
        <AllPartsInfographic width={width}>
          {renderDynamicInfographic()}
        </AllPartsInfographic>
        {renderOverview()}
      </ContainerInfographic>
    </Container>
  );
};

export default Infographic;
