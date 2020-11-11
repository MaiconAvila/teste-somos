import React from 'react';
import styled from 'styled-components';
import colors from '../Colors';

const ContainerFamilyCircle = styled.div`
  width: ${props => props.sizeCircle};
  height: ${props => props.sizeCircle};
  border-radius: 50%;
  margin-top: 2rem;
  background-color: ${colors.grayTertiary};
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 40vw;
    height: 40vw;
    margin-top: 0;
    left: 1.5rem;
    bottom: 2.5rem;
  }
`;
const WhiteCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 7.125rem;
  height: 7.125rem;
  position: absolute;
  z-index: 2;
  background-color: #ffffffBF;
  box-shadow: 0 .125rem .25rem #00000029;
  border-radius: 50%;

  @media (max-width: 425px) {
    width: 25vw;
    height: 25vw;
  }
`;
const DataFamilyCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const TitleFamilyCircle = styled.h3`
  color: ${colors.primaryColorViolet};
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 1.875rem;
  }
`;
const ParagraphFamilyCircle = styled.p`
  color: ${colors.primaryColorViolet};
  font-size: .9375rem;
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: .75rem;
  }
`;
const InsideFamilyCircle = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${colors.secondaryColorViolet};
  position: absolute;
  top: ${props => props.positionY}%;
  left: ${props => props.positionX}%;
  border: .0625rem solid ${colors.primaryColorViolet};
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
    <ContainerFamilyCircle 
      sizeCircle={props.sizeCircle(props.amountFamily)}
    >
      {renderFamilyList()}
      <WhiteCircle>
        <DataFamilyCircle>
          <TitleFamilyCircle>{props.amountFamily}</TitleFamilyCircle>
          <ParagraphFamilyCircle>Famílias</ParagraphFamilyCircle>
        </DataFamilyCircle>
      </WhiteCircle>
    </ContainerFamilyCircle>
  )
};

export default FamilyCircle;
