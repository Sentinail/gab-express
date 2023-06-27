import React, {useContext, useRef} from 'react'
import { GearContainer, GearBody, GearTeeth, GearHole } from './GearStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'

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

export default Gear