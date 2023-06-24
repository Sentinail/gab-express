import React, {useContext} from 'react'
import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'

const StyledFooter = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${props => {return props.backgroundColor}};
`

function Footer() {
  const styles = useContext(stylesContext);
  
  return (
    <>
      <StyledFooter StyledFooter backgroundColor={styles.primaryColor}></StyledFooter>
    </>
  )
}

export default Footer