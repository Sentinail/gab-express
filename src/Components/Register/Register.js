import React, { useContext } from 'react'
import styled from 'styled-components'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import RegisterFormTest from './RegisterForm'

const RegisterContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${require("../../Assets/Images/Sign-in_Bg_2.jpg")});
    background-size: cover;

    & form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 450px) {
        & {
            background-image: none;
            background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        }

        & div {
            width: 100%;
            min-height: 100%;
            border-radius: 0px;

            & form {
                width: 100%;
                height: 100%;
            }
        }
    }
`

function Register() {
    const styles = useContext(stylesContext)

    return (
        <RegisterContainer backgroundColor={styles.primaryColor}>
            <RegisterFormTest></RegisterFormTest>
        </RegisterContainer>
    )
}

export default Register