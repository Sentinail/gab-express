import React, { useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Components/Header/Header';
import axios from 'axios';
import { authContext } from './ContextProviders/AuthProvider';

function App() {  
  const { setUserInfomation, setIsAuth } = useContext(authContext)

  const getUser = async () => {
    const user = await axios.get("http://localhost:9000/users/auth-session", {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
    return user.data
  }

  useEffect(() => {
    getUser().then(res => {
      if (res.login) {
          setIsAuth(res.login)
          setUserInfomation(res.user_data)
      } else {
          setIsAuth(false)
      }
  })
  .catch(err => {alert(err)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App
