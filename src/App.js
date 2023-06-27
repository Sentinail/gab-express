import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './Components/GlobalStyle'
import StylesProvider from './ContextProviders/StylesProvider'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {

  return (
    <>
      <StylesProvider></StylesProvider>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
