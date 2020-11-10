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
  width: 100%;
  height: 4.6875rem;
  padding: 0 4.375rem;
  box-shadow: 0 .125rem .25rem #D6525229;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgLogo = styled.img`
  height: 2.3125rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
`;
const FirstButton = styled.div`
  padding: 0.625rem .6875rem;
  margin: 0 .3125rem;
  border: none;
  background: none;
  font-size: .875rem;
  font-weight: 600;
  color: #515458;
`;
const SecondButton = styled.div`
  padding: 0.625rem .6875rem;
  border: none;
  border-radius: .375rem;
  background: #E03D72;
  font-size: .875rem;
  font-weight: 500;
  color: #FFF;
`;

const Header = (props) => {
  const [listAddress, setListAddress] = useState([]);
  const [fetchResponses] = useMutation(fetchCoordinates, {
    onSuccess: response => {
      // console.log(response);
      setListAddress(response.results);
    }
  });
  const getCooordenates = (e) => {
    const { value } = e.target;
    fetchResponses(value);
  };
  const saveCoordinates = (info) => {
    setListAddress([]);
    props.saveCoordinates(info);
  }
  return (
    <Container>
      <ImgLogo src={logo} alt={'Logotipo'} />
      <InputSearch
        getParameter={getCooordenates}
        saveCoordinates={saveCoordinates}
        listAddress={listAddress}
      />
      <ButtonsContainer>
        <FirstButton>Entrar</FirstButton>
        <SecondButton>Cadastre-se aqui</SecondButton>
      </ButtonsContainer>
    </Container>
  )
}

export default Header;
