import React, { useContext } from 'react'
import { SettingsItemContainer } from './SettingsItemsStyles'
import { stylesContext } from '../../../ContextProviders/StylesProvider'
import axios from 'axios'
import { apiEndpointContext } from '../../../ContextProviders/APIEndpointsProvider'


function SettingsItems(props) {
    const { className } = props
    const styles = useContext(stylesContext)
    const API = useContext(apiEndpointContext)

    const getUserColorPreference = async () => {
        try {
            const result = await axios.get(API.gabExpressApi + "/users/preference", {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
            return result.data
        } catch (err) {
            console.log(err)
        }
    }

    const handleStyleChange = async (styleString) => {
        await axios.patch(API.gabExpressApi + "/users/style", {style: styleString}, {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})

        const userColorPreference = async () => {
            const result = await getUserColorPreference()
            styles.setPrimaryColor(result.primary_color) 
            styles.setSecondaryColor(result.secondary_color)
            styles.setSupportingColor(result.supporting_color)
        }

        userColorPreference()
    }

    return (
        <SettingsItemContainer className={className} backgroundColor={styles.secondaryColor}>
            <p onClick={() => {handleStyleChange("[[75, 141, 193, 1], [47, 46, 46, 1], [224, 228, 236, 1]]")}}> BLUE THEMED </p>
            <p onClick={() => {handleStyleChange("[[47, 46, 46, 1], [75, 141, 193, 1], [242, 242, 242, 1]]")}}> BLACK THEMED </p>
            <p onClick={() => {handleStyleChange("[[125,91,166,255], [48,213,200,255], [223,217,226,255]]")}}> PURPLE THEMED </p>
            <p onClick={() => {handleStyleChange("[[204, 97, 6, 1], [176, 42, 43, 1], [252, 240, 228, 1]]")}}> ORANGE THEMED </p>

        
        </SettingsItemContainer>
    )
}

export default SettingsItems