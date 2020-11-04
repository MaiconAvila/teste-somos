import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const ContainerFamilyCircle = styled.div`
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
const WhiteCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const FamilyCircle = (props) => {
  const renderFamilyList = () => {
    return (
      props.list.map(item => {
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
  return (
    <>
      <ContainerFamilyCircle 
        sizeCircle={props.sizeCircle(props.amountFamily)}
      >
        {renderFamilyList()}
        <DataFamilyCircle>
          <WhiteCircle>
            <TitleFamilyCircle>{props.amountFamily}</TitleFamilyCircle>
            <ParagraphFamilyCircle>Famílias</ParagraphFamilyCircle>
          </WhiteCircle>
        </DataFamilyCircle>
      </ContainerFamilyCircle>
      <ConnectingLink />
    </>    
  )
};

export default FamilyCircle;
