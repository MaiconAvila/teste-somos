import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

const PartnerSchools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${props => props.sizeCircle};
  height: ${props => props.sizeCircle};
  margin-top: ${props => props.amountSchools >= 13 ? '8.5rem': '10.5rem'};
  border-radius: 50%;
  background-color: ${colors.grayTertiary};

  @media (max-width: 425px) {
    right: ${props => props.right && '-1.5rem'};
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
const CircleSchoolsPartner = (props) => {
  console.log('props', props);
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
      sizeCircle={props.sizeCircle(props.amountSchools)}
      amountSchools={props.amountSchools}
      right={props.logged === 'isFamily'}
    >
      {renderSchoolsList()}
      <DataPartnerSchools>
        <WhiteCircle>
          <TitlePartnerSchools>{props.amountSchools}</TitlePartnerSchools>
          <ParagraphPartnerSchools>Escolas parceiras</ParagraphPartnerSchools>
        </WhiteCircle>
      </DataPartnerSchools>
    </PartnerSchools>
  )
};

export default CircleSchoolsPartner;
