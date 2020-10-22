import React from 'react';
import styled from 'styled-components';

// Assets
import logo from '../../assets/images/logo_SOMOS.png';

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

const Header = () => {
  return (
    <Container>
      <ImgLogo src={logo} alt={'Logotipo'} />
      <ButtonsContainer>
        <button>Cadastre-se aqui</button>
      </ButtonsContainer>
    </Container>
  )
}

export default Header;
