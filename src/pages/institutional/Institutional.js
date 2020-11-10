import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import colors from './Colors';
import SideButtons from '../../components/SideButtons/SideButtons';
import RegisterButtons from './RegisterButtons';

// Assets
import ArrowDown from '../../assets/icons/IconArrowDown.svg';
import iconCirclePink from '../../assets/icons/iconCircle_lightPink.svg';
import iconCircleViolet from '../../assets/icons/iconCircle_lightViolet.svg';
import iconCircleOrange from '../../assets/icons/iconCircle_lightOrange.svg';
import iconCircleGray from '../../assets/icons/iconCircle_lightGray.svg';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 70px;
  background:
    url(${iconCirclePink}) 105% -80px no-repeat,
    url(${iconCircleViolet}) 98% 20px no-repeat,
    url(${iconCircleOrange}) -10% 60% no-repeat
  ;
  background-size: 200px 200px, 315px 315px, 315px 315px;
  background-color: ${colors.primaryColorGray};

  @media (max-width: 425px) {
    padding: 5vw;
  }
`;
const ArrowLink = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 10px;
  cursor: pointer;
`;
const WellcomeContainer = styled.section`
  width: 100%;
  padding: 1rem;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.user === 'connected' ? 'left' : 'center'};
  justify-content: space-evenly;

  @media (max-width: 425px) {
    margin-bottom: 5.6rem;
  }
`;
const TitleWelcome = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.25rem;
  font-weight: 600;
  text-align: center;
  color: ${colors.secondaryColorGray};

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }
`;
const SubTitleWelcome = styled.h2`
  width: 285px;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 300;
  text-align: ${props => props.user === 'connected' ? 'left' : 'center'};
  margin: 1.4rem 0 2rem 0;
  color: ${colors.secondaryColorGray};
`;
const ButtonNetwork = styled.button`
  width: 213px;
  height: 45px;
  font-size: 1rem;
  font-weight: medium;
  color: ${colors.white};
  background: ${props => props.user === 'connected' ? '#897CBA' : colors.quaternaryColorGray};
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
const ContainerInformation = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Infographic = styled.div`
  width: ${props => props.user === 'connected' ? '30%' : '60%'};
  height: ${props => props.user === 'disconnected' ? '40vh' : '60vh'};
  margin-left: auto;
  margin-right: 3vw;
  position: relative;
`;
const ParagraphInfographic = styled.h3`
  width: 120px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.quinaryColorGray};
  display: inline;
  position: absolute;
  z-index: 2;
`;
const InfographicItem = styled.img`
  width: 150px;
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;

  @media (max-width: 768px) {
    width: 120px;
  }
`;
const ParagraphInstitutional = styled.p`
  width: 390px;
  font-size: 0.8rem;
  font-weight: 300;
  color: ${colors.quinaryColorGray};
`;

const Institutional = () => {
  const [user] = useState('connected');
  // user: disconnected, connected
  const anchor = user === 'connected' ? '#footer' : '#info';

  return (
    <Container>
      {user === 'connected' && <SideButtons />}
      <ArrowLink href={anchor}>
        <img src={ArrowDown} alt='icon' />
      </ArrowLink>
      <WellcomeContainer user={user}>
        <TitleWelcome>Bem Vindos à Rede de Benefícios</TitleWelcome>
        <SubTitleWelcome user={user}>
          Entre na Rede SOMOS, matricule seus filhos nas melhores escolas e receba benefícios por isso!
        </SubTitleWelcome>
        <ButtonNetwork user={user}>Ver Rede da sua Região</ButtonNetwork>
        {user !== 'connected' && <RegisterButtons />}
      </WellcomeContainer>
      <ContainerInformation  user={user} id='info'>
          <Infographic user={user}>
            <ParagraphInfographic user={user}>
              Infográfico Institucional {/* Texto temporário */}
            </ParagraphInfographic>
            {user === 'connected'
              ? (
                <>
                  <InfographicItem src={iconCircleGray} top='30%' left='10%' />
                  <InfographicItem src={iconCircleGray} top='0' left='calc(100% - 150px)' />
                  <InfographicItem
                    src={iconCircleGray}
                    top='calc(95% - 150px)' left='calc(95% - 150px)'
                  />
                </>
              ) : (
                <>
                  <InfographicItem src={iconCircleGray} top='calc(95% - 150px)' left='0' />
                  <InfographicItem src={iconCircleGray} top='0' left='calc(50% - 75px)' />
                  <InfographicItem
                      src={iconCircleGray}
                      top='calc(100% - 150px)' left='calc(100% - 150px)'
                  />
                </>
              )
            }
          </Infographic>
          <ParagraphInstitutional user={user}>
            Ex enim amet qui cupidatat anim nulla aliqua ipsum officia consectetur Lorem cillum. Est ea excepteur non esse cupidatat aliqua aliquip duis tempor sunt do. Ad nostrud cillum duis culpa Lorem excepteur sit ullamco id. Nulla culpa irure Lorem laboris cillum magna dolore dolore irure ea. Est et consectetur adipisicing ut ad non cillum. Mollit fugiat labore cillum minim incididunt tempor qui est reprehenderit ipsum. Magna eiusmod Lorem magna est ullamco proident ut magna. Ullamco magna nostrud dolore do. Nisi aliqua velit anim in Lorem occaecat exercitation incididunt magna. Aliquip qui nostrud exercitation quis enim ex ut deserunt non elit cupidatat proident non incididunt. Elit sit incididunt dolor in sint commodo adipisicing irure minim et.
          </ParagraphInstitutional>
      </ContainerInformation>
    </Container>
  );
}

export default Institutional;
