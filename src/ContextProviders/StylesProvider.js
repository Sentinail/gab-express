import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { apiEndpointContext } from "./APIEndpointsProvider";

export const stylesContext = createContext();

const StylesProvider = (props) => {
    const { children } = props
    const [ primaryColor, setPrimaryColor ] = useState([47, 46, 46, 1]);
    const [ secondaryColor, setSecondaryColor ] = useState([75, 141, 193, 1]);
    const [ supportingColor, setSupportingColor ] = useState([242, 242, 242, 1]);
    const [settingsPosition, setSettingsPosition] = useState(["50px", "50px"])
    const API = useContext(apiEndpointContext)

    const getUserColorPreference = async () => {
        try {
            const result = await axios.get(API.gabExpressApi + "/users/preference", {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
            return result.data
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const userColorPreference = async () => {
            const result = await getUserColorPreference()
            setPrimaryColor(result.primary_color) 
            setSecondaryColor(result.secondary_color)
            setSupportingColor(result.supporting_color)
        }

        userColorPreference()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <stylesContext.Provider 
        value=
        {{
            primaryColor, 
            setPrimaryColor, 
            secondaryColor, 
            setSecondaryColor, 
            supportingColor, 
            setSupportingColor, 
            settingsPosition, 
            setSettingsPosition
        }}>
            {children}
        </stylesContext.Provider>
    )
}

export default StylesProvider;