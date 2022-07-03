import React from 'react';
import styled, { keyframes } from 'styled-components';
// import RunningPerson from '../../public/assets/';
import { BsChevronCompactDown } from 'react-icons/bs';

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #66bfbf;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
  align-items: center;
  padding-bottom: 30px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: 'Nunito', Sans-serif;
`;

const ArrowAnimation = keyframes`
    0% {margin-top: -5px};
    50% {margin-top: 5px};
    100% {margin-top: 0px};
`;

const Icon = styled.div`
  /* animation-name: ${ArrowAnimation};
  animation-duration: 15s; */
  &:hover {
    transform: translateY(-3px) translateY(5px);
    transition: all 0.5s;
  }
`;

export const LandingPage = () => {
  return (
    <>
      <LandingContainer>
        <iframe
          title="Running"
          style={{
            height: '800px',
            width: '600px',
            pointerEvents: 'none !important',
          }}
          src="https://embed.lottiefiles.com/animation/85330"
        ></iframe>
        <Title>Clean Runnings</Title>
        <Icon>
          <a href="#Map">
            <BsChevronCompactDown style={{ height: '50px', width: '50px' }} />
          </a>
        </Icon>
      </LandingContainer>
    </>
  );
};
