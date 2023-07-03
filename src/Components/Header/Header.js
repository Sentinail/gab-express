import React, { useContext, useState } from 'react'
import { Container, NavBar, DonateLoginContainer, LoginButton, DonateButton, HeaderContainerShadow, MyAccountButton } from './HeaderStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import logo from "../../Assets/Images/GAB logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Gear from './GearIcon/Gear'
import SettingsItems from './SettingsItems/SettingsItems'
import Burger from './Burger/Burger'
import { authContext } from '../../ContextProviders/AuthProvider'

function Header() {
    const goTo = useNavigate()
    const { isAuth } = useContext(authContext)
    const { primaryColor, secondaryColor } = useContext(stylesContext);
    const [settingsIsVisible, setSettingsIsVisible] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    return (
        <>  
            <HeaderContainerShadow className='lolz'>
            </HeaderContainerShadow>
            <Container backgroundColor={primaryColor} secondaryColor={secondaryColor} isNavbarVisible={isNavbarVisible}>
                <img src={logo} alt='logo' onClick={() => {goTo("/home")}}></img>
                <NavBar flexDirection="row">
                    <Link to={"/topdonors"}> TOP DONORS </Link>
                    <Link to={"/about"}> ABOUT </Link>
                    <Link to={"/home"}> HOME </Link>
                    <Link to={"/register"}> SIGN UP </Link>
                </NavBar>
                <DonateLoginContainer>
                    <DonateButton backgroundColor={secondaryColor} onClick={() => {goTo("/orderform")}} > DONATE </DonateButton>
                    {isAuth ? <MyAccountButton onClick={() => {goTo("/myaccount")}}> MY ACCOUNT </MyAccountButton> : <LoginButton onClick={() => {goTo("/login")}}> SIGN-IN </LoginButton>} 
                    <div className='burger-wrapper' onClick={() => {setIsNavbarVisible(!isNavbarVisible)}}>
                        <Burger className="burger" size={0.3}></Burger>
                    </div>
                </DonateLoginContainer>
                <div className='responsive-navbar'>
                    <Link onClick={() => setIsNavbarVisible(false)} to={"/topdonors"}> TOP DONORS </Link>
                    <Link onClick={() => setIsNavbarVisible(false)} to={"/about"}> ABOUT </Link>
                    <Link onClick={() => setIsNavbarVisible(false)} to={"/home"}> HOME </Link>
                    <Link onClick={() => setIsNavbarVisible(false)} to={"/register"}> SIGN UP </Link>
                </div>
            </Container>
            <Gear size={0.5} settingsIsVisible={settingsIsVisible} setSettingsIsVisible={setSettingsIsVisible}></Gear>
            <SettingsItems className={settingsIsVisible? "isVisible" : ""}></SettingsItems> 
        </>
    )
}

export default Header