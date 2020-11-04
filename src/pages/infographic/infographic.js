import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from './colors';

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

const FamilyCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: relative;
  width: ${props => props.sizeCircle};
  height: ${props => props.sizeCircle};
  border-radius: 50%;
  margin-top: 2rem;
  background-color: ${colors.grayTertiary};
  z-index: 1;

  @media (max-width: 425px) {
    width: 160px;
    height: 160px;
    margin-top: 0;
    left: 1.5rem;
    bottom: 2.5rem;
  }
`;

const DataFamilyCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 118px;
  height: 118px;
  position: absolute;
  z-index: 2;
  background-color: #ffffff95;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 50%;
`;

const TitleFamilyCircle = styled.h3`
  color: ${colors.primaryColorViolet};
  font-size: 48px;
  font-weight: bold;
`;

const ParagraphFamilyCircle = styled.p`
  color: ${colors.primaryColorViolet};
  font-size: 15px;
  font-weight: light;
  text-transform: uppercase;
`;

const InsideFamilyCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${colors.secondaryColorViolet};
  position: absolute;
  top: ${props => props.positionY}%;
  left: ${props => props.positionX}%;
  border: 1px solid ${colors.primaryColorViolet};
  z-index: 1;

  &:hover {
    animation: shake 0.5s linear;
  }

  @keyframes shake {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;

const ConnectingLink = styled.div`
  width: 400px;
  height: 15px;
  position: absolute;
  margin-top: 11rem;
  margin-left: 4rem;
  transform: rotate(22deg);
  background-color: ${colors.grayTertiary};

  @media (max-width: 425px) {
    width: 180px;
    height: 15px;
    margin-left: 0;
    bottom: 9rem;
    right: 2rem;
    transform: rotate(53deg);
  }
`;

const PartnerSchools = styled.div`
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${props => props.sizeCircle};
  height: ${props => props.sizeCircle};
  margin-top: ${props => props.amountSchools >= 13 ? '8.5rem': '10.5rem'};
  border-radius: 50%;
  background-color: ${colors.grayTertiary};

  @media (max-width: 425px) {
    right: ${props => props.right === 'isFamily' && '-1.5rem'};
    width: 150px;
    height: 150px;
  }
`;

const DataPartnerSchools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 118px;
  height: 118px;
  position: absolute;
  z-index: 2;
  background-color: #ffffff95;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 50%;
`;

const WhiteCircle = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitlePartnerSchools = styled.h3`
  height: min-content;
  color: ${colors.primaryColorPink};
  font-size: 48px;
  font-weight: bold;
`;

const ParagraphPartnerSchools = styled.p`
  width: min-content;
  color: ${colors.secondaryColorPink};
  font-size: 15px;
  font-weight: light;
  text-transform: uppercase;
`;

const InsideSchoolsCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${colors.primaryColorLightPink};
  position: absolute;
  top: ${props => props.positionY}%;
  left: ${props => props.positionX}%;
  border: 1px solid ${colors.secondaryColorPink};

  &:hover {
    animation: shake 0.5s linear;
  }

  @keyframes shake {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
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
const ContainerFamily = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;

  /* @media (max-width: 1024px) {
    margin-bottom: 1rem;
  } */

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
  flex-direction: column;
  justify-content: space-between;
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
  const [logged] = useState('isFamily');
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

  const renderFamilyList = () => {
    return (
      list.map(item => {
        if(item.type === 'family') {
          return (
            <InsideFamilyCircle
              key={item.id}
              positionX={item.positionX}
              positionY={item.positionY}
            />
          )
        }
        return null;
      })
    )
  };
  
  const renderSchoolsList = () => {
    return (
      list.map(item => {
        if(item.type === 'partnerSchools') {
          return (
            <InsideSchoolsCircle
              key={item.id}
              positionX={item.positionX}
              positionY={item.positionY}
            />
          )
        }
        return null;
      })
    )
  };

  const renderDynamicInfographic = () => {
    switch(logged) {
      case 'isFamily':
        return (
          <ContainerFamily>
            <TitleContainerFamily>Família Silva</TitleContainerFamily>
            <SchoolOrigin>
              <IconSchoolOrigin></IconSchoolOrigin>
              <TextSchoolOrigin>
                <TitleSchool>Escola Infantil</TitleSchool>
                <ParagraphSchool>Origem</ParagraphSchool>
              </TextSchoolOrigin>
            </SchoolOrigin>
            <Family>
              <span></span>
            </Family> 
            <ConnectionDiagonal></ConnectionDiagonal>
            <ConnectionHorizontal></ConnectionHorizontal>
            <SelectedSchool>
              <NumberSelectedSchool>{elementarySchool}</NumberSelectedSchool>
              <TextSelectedSchool>
                <ParagraphSelectedSchool>Escola Fundamental</ParagraphSelectedSchool>
                <SpanSelectedSchool>Selecionadas</SpanSelectedSchool>
              </TextSelectedSchool>
            </SelectedSchool>
          </ContainerFamily>
        )
      case 'isElementary':
        return (
          <>
            <ScreenElementarySchool>
              <TitleElementarySchool>Escola Ataufo</TitleElementarySchool>
              <ContainerElementarySchool>
                <CircleSchool><span></span></CircleSchool>
                <ConnectionInterested></ConnectionInterested>
                <ConnectionRegistered></ConnectionRegistered>
                <CircleFamilyInterested>
                  <NumberFamily>{familyInterested}</NumberFamily>
                  <ParagraphFamily>Famílias</ParagraphFamily>
                  <SpanFamily>Interessadas</SpanFamily>
                </CircleFamilyInterested>
                <CircleFamilyRegistered>
                  <NumberFamily>{familyRegistered}</NumberFamily>
                  <ParagraphFamily>Famílias</ParagraphFamily>
                  <SpanFamily>Matriculadas</SpanFamily>
                </CircleFamilyRegistered>
              </ContainerElementarySchool>
            </ScreenElementarySchool>
          </>
        )
      case 'isInitial':
        return (
        <>
          <FamilyCircle 
            sizeCircle={sizeCircle(amountFamily)}
            amountSchools={amountFamily}>
            {renderFamilyList()}
          <DataFamilyCircle>
            <WhiteCircle>
              <TitleFamilyCircle>{amountFamily}</TitleFamilyCircle>
              <ParagraphFamilyCircle>Famílias</ParagraphFamilyCircle>
            </WhiteCircle>
          </DataFamilyCircle>
          </FamilyCircle>
          <ConnectingLink />
      </>)
      case 'isChildren':
        return (
          <ScreenElementarySchool>
            <TitleElementarySchool color={logged}>Escolinha Mariana</TitleElementarySchool>
            <ContainerElementarySchool>
              <CircleSchool border={logged}><span></span></CircleSchool>
              <ConnectionInterested></ConnectionInterested>
              <ConnectionRegistered></ConnectionRegistered>
              <CircleFamilyInterested>
                <NumberFamily>{childrenOrigin}</NumberFamily>
                <ParagraphFamily>Famílias</ParagraphFamily>
                <SpanFamily>Origem</SpanFamily>
              </CircleFamilyInterested>
              <CircleFamilyRegistered>
                <NumberFamily>{childrenActive}</NumberFamily>
                <ParagraphFamily>Famílias</ParagraphFamily>
                <SpanFamily>Já se matricularam</SpanFamily>
              </CircleFamilyRegistered>
            </ContainerElementarySchool>
          </ScreenElementarySchool>
        )
    }
  }

  const displayPartnerSchools = () => {
    switch (logged) {
      case 'isInitial':
        return 'flex'
      case 'isFamily':
        return 'flex'
      case 'isElementary':
        return 'none'
      case 'isChildren':
        return 'none'
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
          <PartnerSchools
            sizeCircle={sizeCircle(amountSchools)}
            amountSchools={amountSchools}
            display={displayPartnerSchools}
            right={logged}
          >
            {renderSchoolsList()}
            <DataPartnerSchools>
              <WhiteCircle>
                <TitlePartnerSchools>{amountSchools}</TitlePartnerSchools>
                <ParagraphPartnerSchools>Escolas parceiras</ParagraphPartnerSchools>
              </WhiteCircle>
            </DataPartnerSchools>
          </PartnerSchools>
        </AllPartsInfographic>
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
              color={colorSecondData}>
            
            {logged === 'isElementary' && familyInterested + familyRegistered || logged === 'isChildren' && '0,3%' || logged === 'isInitial' && amountSchools || 'isFamily' && amountSchools}</SecondData>
          </Data>
        </TotalDataInfographic>
      </ContainerInfographic>
    </Container>
  );
};

export default Infographic;
