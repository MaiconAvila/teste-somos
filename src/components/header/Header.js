import React, { useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';

// Assets
import logo from '../../assets/images/logo_SOMOS.png';

// Components
import InputSearch from '../inputs/InputSearch';

// API
import { fetchCoordinates } from '../../dataflow/RequestApi';

const Container = styled.header`
  width: 100;
  height: 75px;
  padding: 0 70px;
  box-shadow: 0px 2px 4px #D6525229;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgLogo = styled.img`
  height: 37px;
`;

const ButtonsContainer = styled.div`

 button {
   padding: 10px;
   border-radius: 5px;
 }
`;

const Header = (props) => {
  const [listAddress, setListAddress] = useState([]);
  const [fetchResponses] = useMutation(fetchCoordinates, {
    onSuccess: response => {
      console.log(response);
      setListAddress(response.results);
    }
  });
  const getCooordenates = (e) => {
    const { value } = e.target;
    fetchResponses(value);
  }

  return (
    <Container>
      <ImgLogo src={logo} alt={'Logotipo'} />
      <InputSearch
        getParameter={getCooordenates}
        saveCoordinates={props.saveCoordinates}
        listAddress={listAddress}
      />
      <ButtonsContainer>
        <button>Cadastre-se aqui</button>
      </ButtonsContainer>
    </Container>
  )
}

export default Header;
