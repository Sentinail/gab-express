import styled from 'styled-components'
import { stylesContext } from '../ContextProviders/StylesProvider'
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${props => {return props.backgroundColor}};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  position: sticky;
  top: 0px;
  left: 0px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
`

const StyledLogin = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${props => {return props.backgroundColor}};
`


function Header() {
  const styles = useContext(stylesContext);
  const navigate = useNavigate()

  const goToPage = (url) => {
    navigate(url); 
  }

  return (
    <>
      <StyledHeader backgroundColor={styles.primaryColor}>
        <StyledLogo backgroundColor={styles.supportingColor}></StyledLogo>
        <StyledNav>
          <StyleNavItems backgroundColor={styles.supportingColor} onClick={() => {goToPage("/register")}}><p> Register </p></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor} onClick={() => {goToPage("/orderForm")}}><p> Order </p> </StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor} onClick={() => {goToPage("/topDonors")}}><p> Top Donors </p></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor} onClick={() => {goToPage("/myAccount")}}><p> My Account </p></StyleNavItems>
          <StyleNavItems backgroundColor={styles.supportingColor} onClick={() => {goToPage("/home")}}><p> Home </p></StyleNavItems>
        </StyledNav>
        <StyledLogin backgroundColor={styles.supportingColor}></StyledLogin>
      </StyledHeader>
    </>
  )
}

export default Header