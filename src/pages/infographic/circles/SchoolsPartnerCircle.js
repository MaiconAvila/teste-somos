import React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const PartnerSchools = styled.div`
  width: ${props => props.sizeCircle};
  height: ${props => props.sizeCircle};
  margin-top: 10.5rem;
  border-radius: 50%;
  background-color: ${colors.grayTertiary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 40vw;
    height: 40vw;
  }
`;
const WhiteCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 125px;
  height: 125px;
  position: absolute;
  z-index: 2;
  background-color: #ffffffBF;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 50%;

  @media (max-width: 425px) {
    width: 27vw;
    height: 27vw;
  }
`;
const DataPartnerSchools = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const TitlePartnerSchools = styled.h3`
  height: min-content;
  color: ${colors.primaryColorPink};
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;
const ParagraphPartnerSchools = styled.p`
  width: min-content;
  color: ${colors.secondaryColorPink};
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 12px;
  }
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
const CircleSchoolsPartner = (props) => {
  const renderSchoolsList = () => {
    return (
      props.list.map(item => {
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
  return (
    <PartnerSchools
      style={props.style}
      sizeCircle={props.sizeCircle(props.amountSchools)}
      amountSchools={props.amountSchools}
    >
      {renderSchoolsList()}
      <WhiteCircle>
        <DataPartnerSchools>
          <TitlePartnerSchools>{props.amountSchools}</TitlePartnerSchools>
          <ParagraphPartnerSchools>Escolas parceiras</ParagraphPartnerSchools>
        </DataPartnerSchools>
      </WhiteCircle>
    </PartnerSchools>
  )
};

export default CircleSchoolsPartner;
