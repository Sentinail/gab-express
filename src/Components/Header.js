import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'
import { useContext } from 'react'

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${props => {return props.backgroundColor}};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
`

const StyledLogo = styled.div`
  width: 150px;
  height: 50px;
  background-color: ${props => {return props.backgroundColor}};
`

const StyledNav = styled.div`
  min-width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const StyleNavItems = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => {return props.backgroundColor}};
`

const StyledLogin = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${props => {return props.backgroundColor}};
`


function Header() {
  const styles = useContext(stylesContext);

  return (
    <>
      <StyledHeader backgroundColor={styles.primaryColor}>
        <StyledLogo backgroundColor={styles.supportingColor}></StyledLogo>
        <StyledNav>
          <StyleNavItems backgroundColor={styles.supportingColor}></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor}></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor}></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor}></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor}></StyleNavItems>
        </StyledNav>
        <StyledLogin backgroundColor={styles.supportingColor}></StyledLogin>
      </StyledHeader>
    </>
  )
}

export default Header