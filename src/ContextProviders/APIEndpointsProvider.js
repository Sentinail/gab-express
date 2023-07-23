import React, {useState, createContext} from 'react'

export const apiEndpointContext = createContext()

function APIEndpointsProvider(props) {
    const { children } = props
    const [gabExpressApi, setGabExpressApi] = useState("http://localhost:9000")

    return (
        <apiEndpointContext.Provider value={{gabExpressApi, setGabExpressApi}}>{children}</apiEndpointContext.Provider>
    )
}

export default APIEndpointsProvider