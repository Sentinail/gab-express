import styled from "styled-components";

export const GearContainer = styled.div`
    width: calc(50px * ${props => {return props.size}});
    height: calc(50px * ${props => {return props.size}});
    position: fixed;
    bottom: ${props => {return props.settingsPosition[0]}};
    left: ${props => {return props.settingsPosition[1]}};
    rotate: 0deg;
    z-index: 0;
    border-radius: 100%;
    transition: all 2s;

    &:hover {
        cursor: pointer;
    }

    &.rotate {
        rotate: 360deg;
    }

    z-index: 100;
`

export const GearBody = styled.div`
    width: calc(50px * ${props => {return props.size}});
    height: calc(50px * ${props => {return props.size}});
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-radius: 100%;

`

export const GearTeeth = styled.div`
    width: calc(15px * ${props => {return props.size}});
    height: calc(65px * ${props => {return props.size}});
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(${props => {return props.degrees}}deg);
    z-index: 2;
`

export const GearHole = styled.div`
    width: calc(20px * ${props => {return props.size}});
    height: calc(20px * ${props => {return props.size}});
    background-color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
    position: absolute;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 3;
`

