import React, { useContext } from 'react'
import { SquareDiv, RotatedDiv1, RotatedDiv2, RotatedDiv3, RotatedDiv4, GearHole } from "./GearStyles"
import { stylesContext } from '../../ContextProviders/StylesProvider'

function GearIcon(props) {
    const { primaryColor, settingsPosition } = useContext(stylesContext);

    return (
        <SquareDiv backgroundColor={primaryColor} settingsPosition={settingsPosition} style={{transform: `scale(${props.size})`}}>
            <RotatedDiv1 backgroundColor={primaryColor}></RotatedDiv1>
            <RotatedDiv2 backgroundColor={primaryColor}></RotatedDiv2>
            <RotatedDiv3 backgroundColor={primaryColor}></RotatedDiv3>
            <RotatedDiv4 backgroundColor={primaryColor}></RotatedDiv4>
            <GearHole></GearHole>
        </SquareDiv>
    )
}

export default GearIcon