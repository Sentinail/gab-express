import React, {useEffect, useContext} from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Components/Header/Header';
import axios from 'axios';
import { authContext } from './ContextProviders/AuthProvider';

function App() {
  const { setIsAuth, setUserInfomation } = useContext(authContext)

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      const email = localStorage.getItem("email")
      const password = localStorage.getItem("password")

      axios.post("http://localhost:5000/authentication", {
        emailAddress: email,
        password: password
      }).then(res => {
        res.data.authenticated ? setIsAuth(res.data.authenticated) : setIsAuth(res.data.authenticated)
        setUserInfomation(res.data.userData)
      }).catch(err => {
        setIsAuth(false);
        console.log(err)
      })
    }
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
