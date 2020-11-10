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
  width: 250px;
  padding: 10px;
  background: #FFF;
  border-radius: 6px;
  position: absolute;
  bottom: 35px;
  z-index: ${props => props.zIndex ? 1 : 0}
`;
const NameSchool = styled.div`
  padding: 5px 0;
  font-size: 18px;
  font-weight: 500;
  color: #E03D72;
`;
const AddressSchool = styled.div`
  padding: 5px 0;
  font-size: 12px;
  font-weight: 400;
  color: #888586;
`;
const Pin = styled.img`
  width: ${props => props.small ? '25px' : '35px'};
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
