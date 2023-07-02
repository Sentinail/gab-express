import React, { useContext } from 'react'
import { SettingsItemContainer } from './SettingsItemsStyles'
import { stylesContext } from '../../../ContextProviders/StylesProvider'

function SettingsItems(props) {
    const { className } = props
    const styles = useContext(stylesContext)

    return (
        <SettingsItemContainer className={className} backgroundColor={styles.secondaryColor}>
            <p onClick={() => {styles.setPrimaryColor([75, 141, 193, 1]); styles.setSecondaryColor([47, 46, 46, 1]); styles.setSupportingColor([224, 228, 236, 1])}}> BLUE THEMED </p>
            <p onClick={() => {styles.setPrimaryColor([47, 46, 46, 1]); styles.setSecondaryColor([75, 141, 193, 1]); styles.setSupportingColor([242, 242, 242, 1])}}> BLACK THEMED </p>
            <p onClick={() => {styles.setPrimaryColor([125,91,166,255]); styles.setSecondaryColor([48,213,200,255]); styles.setSupportingColor([223,217,226,255])}}> PURPLE THEMED </p>
            <p onClick={() => {styles.setPrimaryColor([204, 97, 6, 1]); styles.setSecondaryColor([176, 42, 43, 1]); styles.setSupportingColor([252, 240, 228, 1])}}> ORANGE THEMED </p>
        </SettingsItemContainer>
    )
}

export default SettingsItems