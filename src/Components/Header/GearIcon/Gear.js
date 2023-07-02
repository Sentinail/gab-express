import React, {useContext, useRef} from 'react'
import { GearContainer, GearBody, GearTeeth, GearHole } from './GearStyles'
import { stylesContext } from '../../../ContextProviders/StylesProvider';

function Gear(props) {
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
                <GearBody size={size} backgroundColor={styles.secondaryColor}>
                    <GearTeeth size={size} degrees={180} backgroundColor={styles.secondaryColor}></GearTeeth>
                    <GearTeeth size={size} degrees={90} backgroundColor={styles.secondaryColor}></GearTeeth>
                    <GearTeeth size={size} degrees={45} backgroundColor={styles.secondaryColor}></GearTeeth>
                    <GearTeeth size={size} degrees={-45} backgroundColor={styles.secondaryColor}></GearTeeth>
                    <GearHole size={size} secondaryColor={styles.primaryColor}></GearHole>
                </GearBody>
            </GearContainer>
        </div>
    )
}

export default Gear