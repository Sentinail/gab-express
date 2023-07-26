import React, { useContext, useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Components/Header/Header';
import axios from 'axios';
import { authContext } from './ContextProviders/AuthProvider';
import { apiEndpointContext } from './ContextProviders/APIEndpointsProvider';
import { stylesContext } from './ContextProviders/StylesProvider';

function App() {  
  const { setUserInfomation, setIsAuth } = useContext(authContext)
  const { primaryColor, secondaryColor } = useContext(stylesContext)
  const API = useContext(apiEndpointContext)

  const getUser = async () => {
    const user = await axios.get(API.gabExpressApi + "/users/auth-session", {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
    return user.data
  }

  useLayoutEffect(() => {
    getUser().then(res => {
      if (res.login) {
          setIsAuth(res.login)
          setUserInfomation(res.user_data)
      } else {
          setIsAuth(false)
      }
  })
  .catch(err => {console.log(err)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <GlobalStyle backgroundColor={primaryColor} secondaryColor={secondaryColor}></GlobalStyle>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App
