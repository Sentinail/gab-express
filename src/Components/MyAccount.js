import React, { useContext } from 'react'
import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'

const StyledRegister = styled.div`
  width: 100%;
  min-height: calc(100vh-70px);
  background-color: ${props => {return props.backgroundColor}};
`

function MyAccount(props) {
  const styles = useContext(stylesContext);

  return (
    <StyledRegister backgroundColor={styles.secondaryColor}>
      <h1> This is Accounts Changed from Testing Branch </h1>
    </StyledRegister>
  )
}

export default MyAccount