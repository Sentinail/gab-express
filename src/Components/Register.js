import React, { useContext } from 'react'
import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'

const StyledRegister = styled.div`
  width: 100%;
  min-height: calc(100vh-70px);
  background-color: ${props => {return props.backgroundColor}};
`

function Register() {
  const styles = useContext(stylesContext);

  return (
    <StyledRegister backgroundColor={styles.secondaryColor}></StyledRegister>
  )
}

export default Register