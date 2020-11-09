import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import colors from './Colors';
import Footer from '../../components/footer/Footer';
import WelcomeDisconnected from '../institutional/WelcomeDisconnected';
import WelcomeConnected from '../institutional/WelcomeConnected';
import SideButtons from '../../components/SideButtons/SideButtons';

// Assets
import ArrowDown from '../../assets/icons/IconArrowDown.svg';

const Container = styled.div`
  
`;

const ContainerInstitutional = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${colors.primaryColorGray};
`;

const CircleDouble = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1% 1% 0 0;
  overflow: hidden;
`;

const CircleSmaller = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -20%;
  left: 60%;
  border-radius: 50%;
  background-color: ${colors.primaryColorLightPink};

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const CircleBigger = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${colors.secondaryColorViolet};

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const CircleArrowDown = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 65vh;
  left: -8vw;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${colors.primaryColorYellow};

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    left: -6vw;
  }

  @media (max-width: 425px) {
    width: 70px;
    height: 70px;
    top: 80vh;
    left: -4vw;
  }

  @media (max-width: 320px) {
    top: 87vh;
  }
`;

const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InstitutionalInformation = styled.div`
  width: ${props => props.user === 'disconnected' ? '65%' : '90%'};
  margin-top: ${props => props.user === 'disconnected' ? '5rem' : '6.2rem'};

  @media (max-width: 1024px) {
    width: ${props => props.user === 'disconnected' ? '65%' : '85%'};
  }

  @media (max-width: 768px) {
    width: ${props => props.user === 'disconnected' ? '100%' : '83%'};
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;


const InstitutionalInfographic = styled.div`
  width: 90%;
  display: flex;
  justify-content: ${props => props.user === 'disconnected' 
  ? 'space-between' : 'flex-end'};
  margin: ${props => props.user === 'disconnected' 
  ? '11.2rem 0 4.3rem 0' : '-8.8rem 0 2rem 0'};

  @media (max-width: 1024px) {
    margin: ${props => props.user === 'disconnected' 
    ? '4.2rem 0 4.3rem 0' : '-5.8rem 0 2rem 0'};
  }

  @media (max-width: 768px) {
    margin: ${props => props.user === 'disconnected' 
    ? '4.2rem 0 4.3rem 0' : '-8.8rem 0 2rem 0'};
  }

  @media (max-width: 425px) {
    margin: ${props => props.user === 'disconnected' 
    ? '8rem 0 4.3rem 0' : '-5.8rem 0 2rem 0'};
    flex-direction: column;
    align-items: center;
  }
`;

const Infographic = styled.div`
  width: ${props => props.user === 'disconnected' ? '65%' : '25%'};
  height: ${props => props.user === 'disconnected' ? '40vh' : '75vh'};
  margin-right: ${props => props.user === 'disconnected' ? '0' : '5rem'};
  position: relative;

  @media (max-width: 768px) {
    width: ${props => props.user === 'disconnected' ? '65%' : '30%'};
    height: ${props => props.user === 'disconnected' ? '40vh' : '60vh'};
    padding-top: ${props => props.user === 'disconnected' ? '0' : '5%'};
  }

  @media (max-width: 425px) {
    width: ${props => props.user === 'disconnected' ? '100%' : '90%'};
    margin-right: 0;
    display: flex;
    justify-content: center;
  }
`;

const ParagraphInfographic = styled.h3`
  width: 120px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: ${props => props.user === 'disconnected' ? '12%' : '0'};
  color: ${colors.quinaryColorGray};

  @media (max-width: 768px) {
    text-align: ${props => props.user === 'disconnected' ? 'center' : 'start'};
    margin-left: 25%;
  }

  @media (max-width: 425px) {
    margin-left: 0;
    text-align: center;
  }
`;

const FirstCircleInstitutional = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: ${props => props.user === 'disconnected' ? '40%' : '0'};
  left: ${props => props.user === 'disconnected' ? '13%' : '56%'};
  background: ${colors.tertiaryColorGray};
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
    left: ${props => props.user === 'disconnected' ? '13%' : '60%'};
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: ${props => props.user === 'disconnected' ? '85%' : '43%'};
    left: ${props => props.user === 'disconnected' ? '10%' : '54%'};
  }

  @media (max-width: 425px) {
    top: 70%;
    left: 9%;
  }

  @media (max-width: 320px) {
    left: 5%;
  }
`;

const SecondCircleInstitutional = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  left: ${props => props.user === 'disconnected' ? '41%' : '0%'};
  bottom: ${props => props.user === 'disconnected' ? '32%' : '40%'};
  background: ${colors.tertiaryColorGray};
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
    left: ${props => props.user === 'disconnected' ? '38%' : '5%'};
    bottom: ${props => props.user === 'disconnected' ? '45%' : '41%'};
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    left: ${props => props.user === 'disconnected' ? '32%' : '90%'};
    bottom: ${props => props.user === 'disconnected' ? '22%' : '70%'};
  }

  @media (max-width: 425px) {
    left: 39%;
    bottom: 39%;
  }
`;

const ThirdCircleInstitutional = styled.div`
  width: 150px;
  height: 150px;
  top: ${props => props.user === 'disconnected' ? '40%' : '60%'};
  left: ${props => props.user === 'disconnected' ? '68%' : '56%'};
  position: absolute;
  background: ${colors.tertiaryColorGray};
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
    left: 63%;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: ${props => props.user === 'disconnected' ? '85%' : '75%'};
    left: ${props => props.user === 'disconnected' ? '53%' : '90%'};
  }

  @media (max-width: 425px) {
    top: 70%;
    left: 70%;
  }
`;

const ParagraphInstitutional = styled.p`
  width: 390px;
  font-size: 0.8rem;
  font-weight: 300;
  margin-top: ${props => props.user === 'disconnected' ? '0' : '10%'};
  color: ${colors.quinaryColorGray};

  @media (max-width: 768px) {
    width: ${props => props.user === 'disconnected' ? '390px' : '43%'};
  }

  @media (max-width: 425px) {
    margin-top: ${props => props.user === 'disconnected' ? '5rem' : '10%'};
    width: ${props => props.user === 'disconnected' ? '300px' : '90%'};
    font-size: 1.3rem;
  }
`;

const Institutional = () => {
  const [user] = useState('connected');
  // user: disconnected, connected

  return (
    <Container>
      <ContainerInstitutional>
        {user === 'connected' && <SideButtons />}
        <CircleDouble>
          <CircleSmaller />
          <CircleBigger />
        </CircleDouble>
        <CircleArrowDown>
          <img src={ArrowDown} />
        </CircleArrowDown>
        <ContainerInformation>
          <InstitutionalInformation
            user={user}>
            {user === 'disconnected' 
            ? <WelcomeDisconnected /> : <WelcomeConnected />}
          </InstitutionalInformation>
          <InstitutionalInfographic
            user={user}>
            <Infographic
              user={user}>
              <ParagraphInfographic
                user={user}>
                Infográfico Institucional
              </ParagraphInfographic>
              <FirstCircleInstitutional 
                user={user}/>
              <SecondCircleInstitutional
                user={user}/>
              <ThirdCircleInstitutional
                user={user}/>
            </Infographic>
            <ParagraphInstitutional
              user={user}>
              Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas. Parágrafo Institucional com texto falando sobre a plataforma etc. Parágrafo Institucional com texto falando sobre a plataforma e outras questões diversas.
            </ParagraphInstitutional>
          </InstitutionalInfographic>
        </ContainerInformation>
      </ContainerInstitutional>
      <Footer />
    </Container>
  );
}

export default Institutional;
