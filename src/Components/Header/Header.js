import React, { useContext } from 'react'
import { Container, NavBar, DonateLoginContainer, LoginButton, DonateButton, } from './HeaderStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import logo from "../../Assets/Images/GAB logo.png"
import { Link, useNavigate } from 'react-router-dom'
import GearIcon from '../GearIcon/Gear'

function Header() {
    const goTo = useNavigate()
    const { primaryColor, secondaryColor } = useContext(stylesContext);

    return (
        <>
            <Container backgroundColor={primaryColor} secondaryColor={secondaryColor}>
                <img src={logo} alt='logo' onClick={() => {goTo("/home")}}></img>
                <NavBar>
                    <Link to={"/topdonors"}> TOP DONORS </Link>
                    <Link to={"/about"}> ABOUT </Link>
                    <Link to={"/home"}> HOME </Link>
                    <Link to={"/register"}> SIGN UP </Link>
                </NavBar>

                <DonateLoginContainer>
                    <DonateButton backgroundColor={secondaryColor} onClick={() => {goTo("/orderform")}} > DONATE </DonateButton>
                    <LoginButton onClick={() => {goTo("/login")}}> SIGN-IN </LoginButton>
                </DonateLoginContainer>
            </Container>
            <GearIcon size={0.5}></GearIcon>
        </>
    )
}

export default Header