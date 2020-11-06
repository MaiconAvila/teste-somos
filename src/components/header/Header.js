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
  display: flex;
`;
const FirstButton = styled.div`
  padding: 10px 11px;
  margin: 0 5px;
  border: none;
  background: none;
  font-size: .875rem;
  font-weight: 600;
  color: #515458;
`;
const SecondButton = styled.div`
  padding: 10px 11px;
  border: none;
  border-radius: 6px;
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
