import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.8rem 1.8rem;
  background: #fff;

  @media (max-width: 768px) {
    align-items: initial;
  }
`;

const About = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 30%;
    text-align: center;
  }
`;

const Cadastro = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 30%;
    text-align: center;
  }
`;

const Contato = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 30%;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: .8125rem;
  color: #515458;
  margin-bottom: 1.12rem;
  text-transform: uppercase;
`;

const ContainerParagraph = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Paragraph = styled.a`
  font-weight: 300;
  font-size: .8125rem;
  color: #515458;
  margin-right: 1.25rem;
  text-decoration: none;

  @media (max-width: 425px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <Container id="footer">
      <About>
        <Title>sobre</Title>
        <ContainerParagraph>
          <Paragraph target="_blank" href="#">A Rede</Paragraph>
          <Paragraph target="_blank" href="#">As Famílias</Paragraph>
          <Paragraph target="_blank" href="#">As Escolas</Paragraph>
        </ContainerParagraph>
      </About>
      <Cadastro>
        <Title>cadastro</Title>
        <ContainerParagraph>
          <Paragraph target="_blank" href="#">Família</Paragraph>
          <Paragraph target="_blank" href="#">Escola Parceira SOMOS</Paragraph>
          <Paragraph target="_blank" href="#">Escola Infantil</Paragraph>
          <Paragraph target="_blank" href="#">Administrador</Paragraph>
        </ContainerParagraph>
      </Cadastro>
      <Contato>
        <Title>contato</Title>
        <ContainerParagraph>
          <Paragraph target="_blank" href="#">Rede SOMOS</Paragraph>
          <Paragraph target="_blank" href="#">Grupo Cogna Educação</Paragraph>
        </ContainerParagraph>
      </Contato>
    </Container>
  );
};

export default Footer;