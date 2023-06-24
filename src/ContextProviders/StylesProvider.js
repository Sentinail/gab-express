import { createContext } from "react";
import { useState } from "react";

export const stylesContext = createContext();

const StylesProvider = (props) => {
    const { children } = props
    const [ primaryColor, setPrimaryColor ] = useState("rgb(0, 0, 0, 1)");
    const [ secondaryColor, setSecondaryColor ] = useState("rgb(0, 0, 0, 0)");
    const [ supportingColor, setSupportingColor ] = useState("rgb(64, 64, 64, 1)");

    return (
        <stylesContext.Provider value={{primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, supportingColor, setSupportingColor}}>
            {children}
        </stylesContext.Provider>
    )
}

export default StylesProvider;