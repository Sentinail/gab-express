import React, { useContext } from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'

const StyledHomePage = styled.div`
  width: 100%;
  min-height: 400vh;
  background-color: ${props => {return props.backgroundColor}};
`

function HomePage() {
  const styles = useContext(stylesContext);

  return (
    <>
      <StyledHomePage backgroundColor={styles.secondaryColor}></StyledHomePage>
      <Footer></Footer>
    </>
  )
}

export default HomePage