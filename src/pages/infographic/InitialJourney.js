import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

// Components
import FamilyCircle from './circles/FamilyCircle';
import SchoolsPartnerCircle from './circles/SchoolsPartnerCircle';

const AllPartsInfographic = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 425px) {
    width: 95%;
  }
`;
const ConnectingLink = styled.div`
  width: 85%;
  height: 15px;
  position: absolute;
  top: 12rem;
  left: 4rem;
  transform: rotate(19deg);
  background-color: ${colors.grayTertiary};

  @media (max-width: 425px) {
    width: 180px;
    height: 15px;
    top: 8rem;
    left: 4rem;
    transform: rotate(53deg);
  }
`;

const InitialJourney = (props) => {
  return (
    <AllPartsInfographic>
      <FamilyCircle
        amountFamily={props.amountFamily}
        list={props.list}
        sizeCircle={props.sizeCircle}
      />
      <ConnectingLink />
      <SchoolsPartnerCircle
        amountSchools={props.amountSchools}
        list={props.list}
        logged={props.logged}
        sizeCircle={props.sizeCircle}
      />
    </AllPartsInfographic>
  )
};

export default InitialJourney;
