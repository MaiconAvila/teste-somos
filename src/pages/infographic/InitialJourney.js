import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

// Components
import FamilyCircle from './FamilyCircle';
import CircleSchoolsPartner from './CircleSchoolsPartner';

const AllPartsInfographic = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 2.4rem;
  width: 500px;

  @media (max-width: 425px) {
    width: 330px;
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
      <CircleSchoolsPartner
        amountSchools={props.amountSchools}
        list={props.list}
        logged={props.logged}
        sizeCircle={props.sizeCircle}
      />
    </AllPartsInfographic>
  )
};

export default InitialJourney;
