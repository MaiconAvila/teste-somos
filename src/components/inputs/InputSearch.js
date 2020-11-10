import React from 'react';
import styled from 'styled-components';

import searchIcon from '../../assets/images/search_gray.svg';

const Container = styled.div`
  width: 13.5625rem;
  height: 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.625rem .75rem;
  padding-right: 1.875rem;
  border-radius: .375rem;
  border: solid .5px #888586;

  font-size: .75rem;
  font-weight: 600;
  color: #515458;

  &::-webkit-input-placeholder {
   color: #888586;
  }

  &:-moz-placeholder { /* Firefox 18- */
    color: #888586;
  }

  &::-moz-placeholder {  /* Firefox 19+ */
    color: #888586;
  }

  &:-ms-input-placeholder {  
    color: #888586;
  }
`
const IconSearch = styled.img`
  height: 1.1875rem;
  position: absolute;
  right: 0.625rem;
`;

const List = styled.ul`
  width: 100%;
  position: absolute;
  top: 2.25rem;
  z-index: 1;
  background: #FFF;
  border-radius: .375rem;
  border: solid 1px;
  list-style: none;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 0.625rem .75rem;
  font-size: .875rem;
  color: #515458;
  border-bottom: solid 0.5px #727780;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const InputSearch = (props) => {
  return (
    <Container>
      <Input
        type='text'
        onChange={props.getParameter}
        placeholder='Comece a procurar'
      />
      <IconSearch src={searchIcon} />
      {props.listAddress.length > 0 &&
        <List>
          {props.listAddress.map(item => (
            <ListItem
              key={item.place_id}
              onClick={() => props.saveCoordinates(item)}
            >
              {item.formatted_address}
            </ListItem>
          ))}
        </List>
      }
    </Container>
  )
}

export default InputSearch;
