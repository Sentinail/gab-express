import styled from "styled-components";

export const SquareDiv = styled.div`
    * {
        background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    }

  position: fixed;
  bottom: ${props => {return props.settingsPosition[0]}};
  left: ${props => {return props.settingsPosition[1]}};
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  
  border-radius: 100%;
  z-index: 1;
  transform: rotate(0);
  transition: all 5s;

  &.rotate {
    transform: rotate(360);
    background-color: red;
  }
`;

export const RotatedDiv1 = styled.div`
  width: 15px;
  height: calc(50px + 26.667px);
  transform: translate(-50%, -50%) rotate(180deg);
  position: absolute;
  top: 50%;
  left: 50%;
 
  z-index: 2;
`;

export const RotatedDiv2 = styled.div`
  width: 15px;
  height: calc(50px + 26.667px);
  transform: translate(-50%, -50%) rotate(90deg);
  position: absolute;
  top: 50%;
  left: 50%;
 
  z-index: 2;
`;

export const RotatedDiv3 = styled.div`
  width: 15px;
  height: calc(50px + 26.667px);
  transform: translate(-50%, -50%) rotate(45deg);
  position: absolute;
  top: 50%;
  left: 50%;
 
  z-index: 2;
`;

export const RotatedDiv4 = styled.div`
  width: 15px;
  height: calc(50px + 26.667px);
  transform: translate(-50%, -50%) rotate(-45deg);
  position: absolute;
  top: 50%;
  left: 50%;
 
  z-index: 2;
`;

export const GearHole = styled.div`
width: 26.667px;
height: 26.667px;
border-radius: 100%;
background-color: white;
transform: translate(-50%, -50%);
position: absolute;
top: 50%;
left: 50%;

z-index: 3;
`;