import { createContext } from "react";
import { useState } from "react";

export const stylesContext = createContext();

const StylesProvider = (props) => {
    const { children } = props
    const [ primaryColor, setPrimaryColor ] = useState([47, 46, 46, 1]);
    const [ secondaryColor, setSecondaryColor ] = useState([75, 141, 193, 1]);
    const [ supportingColor, setSupportingColor ] = useState([242, 242, 242, 1]);
    const [settingsPosition, setSettingsPosition] = useState(["50px", "50px"])

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