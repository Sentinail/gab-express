import React, { useContext } from 'react'
import { SettingsItemContainer } from './SettingsItemsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'

function SettingsItems(props) {
    const { className } = props
    const styles = useContext(stylesContext)

    return (
        <SettingsItemContainer className={className} backgroundColor={styles.primaryColor}></SettingsItemContainer>
    )
}

export default SettingsItems