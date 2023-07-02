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
        </SettingsItemContainer>
    )
}

export default SettingsItems