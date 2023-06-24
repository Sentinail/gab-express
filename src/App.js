import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import GlobalStyle from './Components/GlobalStyle'
import StylesProvider from './ContextProviders/StylesProvider'

function App() {

  return (
    <>
    <StylesProvider>
      <GlobalStyle />
      <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      <Footer></Footer>
    </StylesProvider>
    </>
  )
}

export default App
