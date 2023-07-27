import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { stylesContext } from '../../ContextProviders/StylesProvider';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border-left: 4px solid ${props => `rgb(${props.spinningColor.join(', ')})`};
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 50% !important;
  width: 50px !important;
  height: 50px !important;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingComponent = () => {
  const styles = useContext(stylesContext);

  return (
    <div>
      <LoadingSpinner spinningColor={styles.secondaryColor}></LoadingSpinner>
    </div>
  );
};

export default LoadingComponent;
