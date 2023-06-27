import { createContext } from "react";
import { useState } from "react";

export const stylesContext = createContext();

const StylesProvider = (props) => {
    const { children } = props
    const [ primaryColor, setPrimaryColor ] = useState("rgba(47, 46, 46, 1)");
    const [ secondaryColor, setSecondaryColor ] = useState("rgba(75, 141, 193, 1)");
    const [ supportingColor, setSupportingColor ] = useState("rgba(47, 46, 46, 1)");

    return (
        <stylesContext.Provider value={{primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, supportingColor, setSupportingColor}}>
            {children}
        </stylesContext.Provider>
    )
}

export default StylesProvider;