import React from 'react';
import styled from 'styled-components';

import searchIcon from '../../assets/images/search_gray.svg';

const Container = styled.div`
  width: 217px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  padding-right: 30px;
  border-radius: 6px;
  border: solid .5px #888586;

  &:focus {
    outline: none;
  }
`
const IconSearch = styled.img`
  width: 16px;
  position: absolute;
  right: 10px;
`;

const List = styled.ul`
  width: 100%;
  position: absolute;
  top: 36px;
  z-index: 1;
  background: #FFF;
  border-radius: 6px;
  border: solid 1px;
  list-style: none;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
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
