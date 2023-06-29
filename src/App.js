import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import StylesProvider from './ContextProviders/StylesProvider'
import Header from './Components/Header/Header';

function App() {

  return (
        <>
      <StylesProvider>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      </StylesProvider>
    </>
  );
}

export default App
