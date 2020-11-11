import React, { useState } from 'react';
import styled from 'styled-components';

// Style
const ContainerPin = styled.div`
  /* width: 5vw; */
  position: relative;
  display: flex;
  justify-content: center;
  cursor: ${props => props.show && 'pointer'};
`;
const ModalPin = styled.div`
  width: 15.625rem;
  padding: .625rem;
  background: #FFF;
  border-radius: .375rem;
  position: absolute;
  bottom: 2.1875rem;
  z-index: ${props => props.zIndex ? 1 : 0}
`;
const NameSchool = styled.div`
  padding: .3125rem 0;
  font-size: 1.125rem;
  font-weight: 500;
  color: #E03D72;
`;
const AddressSchool = styled.div`
  padding: .3125rem 0;
  font-size: .75rem;
  font-weight: 400;
  color: #888586;
`;
const Pin = styled.img`
  width: ${props => props.small ? '1.5625rem' : '2.1875rem'};
  position: absolute;
  bottom: 0;
  z-index: ${props => props.zIndex ? 1 : 0}
`;

const Marker = (props) => {
  const [show, setShow] = useState(false);
  const onHoverMaker = () => {
    setShow(!show);
  };
  return (
    <ContainerPin
      onMouseEnter={onHoverMaker}
      onMouseLeave={onHoverMaker}
      show
    >
      {props.info && show &&
        <ModalPin
          zIndex={show ? 1 : 0}
        >
          <NameSchool>{props.info.name}</NameSchool>
          <AddressSchool>{props.info.address}</AddressSchool>
        </ModalPin>
      }
      <Pin
        small={props.small}
        src={props.pin}
        zIndex={show ? 2 : 0}
      />
    </ContainerPin>
  )
};

export default Marker;
