import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import StylesProvider from './ContextProviders/StylesProvider'
import Header from './Components/Header/Header';
import AuthProvider from './ContextProviders/AuthProvider';

function App() {

  return (
    <>
    <AuthProvider>
      <StylesProvider>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      </StylesProvider>
    </AuthProvider>
    </>
  );
}

export default App
