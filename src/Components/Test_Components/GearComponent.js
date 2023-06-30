import styled from "styled-components";
import React, {useContext, useRef} from 'react'
import { stylesContext } from '../../ContextProviders/StylesProvider'

export const GearContainer = styled.div`
    width: calc(50px * 1);
    height: calc(50px * 1);
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
    width: calc(50px * 1);
    height: calc(50px * 1);
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-radius: 100%;

`

export const GearTeeth = styled.div`
    width: calc(15px * 1);
    height: calc(65px * 1);
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(${props => {return props.degrees}}deg);
    z-index: 2;
`

export const GearHole = styled.div`
    width: calc(20px * 1);
    height: calc(20px * 1);
    background-color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
    position: absolute;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 3;
`

function TestGear(props) {
    const { size, settingsIsVisible, setSettingsIsVisible} = props 
    const styles = useContext(stylesContext);
    const ref = useRef()

    const rotateGear = (el) => {
        el.current.classList.toggle("rotate")
        setSettingsIsVisible(!settingsIsVisible)

    }

    return (
        <div>
            <GearContainer ref={ref} size={size} settingsPosition={styles.settingsPosition} onClick={() => {rotateGear(ref)}}>
                <GearBody size={size} backgroundColor={styles.primaryColor}>
                    <GearTeeth size={size} degrees={180} backgroundColor={styles.primaryColor}></GearTeeth>
                    <GearTeeth size={size} degrees={90} backgroundColor={styles.primaryColor}></GearTeeth>
                    <GearTeeth size={size} degrees={45} backgroundColor={styles.primaryColor}></GearTeeth>
                    <GearTeeth size={size} degrees={-45} backgroundColor={styles.primaryColor}></GearTeeth>
                    <GearHole size={size} secondaryColor={styles.secondaryColor}></GearHole>
                </GearBody>
            </GearContainer>
        </div>
    )
}

export default TestGear

