import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
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
    </StylesProvider>
    </>
  )
}

export default App
