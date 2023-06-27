import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'

const StyledRegister = styled.div`
  width: 100%;
  min-height: calc(100vh-70px);
  background-color: ${props => {return props.backgroundColor}};
`

function MyAccount(props) {
  const styles = useContext(stylesContext);
  useEffect(() => {
    styles.setPrimaryColor("rgb(0, 0, 0, 1)");
  })
  

  return (
    <StyledRegister backgroundColor={styles.secondaryColor}>
      <h1> This is Accounts Changed from Master </h1>
    </StyledRegister>
  )
}

export default MyAccount