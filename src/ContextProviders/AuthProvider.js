import React, { createContext, useState} from 'react'

export const authContext = createContext()


const AuthProvider = (props) => {
    const { children } = props
    const [isAuth, setIsAuth] = useState(false)
    const [userInformation, setUserInfomation] = useState()
    
    return (
        <authContext.Provider value={{isAuth, setIsAuth, userInformation, setUserInfomation}}> {children} </authContext.Provider>
    )
}

export default AuthProvider