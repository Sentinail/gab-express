import React, { useContext, useState } from 'react'
import { Container, NavBar, DonateLoginContainer, LoginButton, DonateButton, HeaderContainerShadow } from './HeaderStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import logo from "../../Assets/Images/GAB logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Gear from '../GearIcon/Gear'
import SettingsItems from '../SettingsItems/SettingsItems'

function Header() {
    const goTo = useNavigate()
    const { primaryColor, secondaryColor } = useContext(stylesContext);
    const [settingsIsVisible, setSettingsIsVisible] = useState(false);

    return (
        <>  
            <HeaderContainerShadow></HeaderContainerShadow>
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
                <Gear size={0.7} settingsIsVisible={settingsIsVisible} setSettingsIsVisible={setSettingsIsVisible}></Gear>
                <SettingsItems className={settingsIsVisible? "isVisible" : ""}></SettingsItems>
            </Container>
        </>
    )
}

export default Header