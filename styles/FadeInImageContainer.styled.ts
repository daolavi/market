import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const FadeInImageContainer = styled.div`
  overflow: hidden;
  animation: ${fadeIn} 0.5s linear;
`;
