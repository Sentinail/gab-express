import React, { useContext } from 'react'
import { Container } from './HeaderStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'

function Header() {
    const styles = useContext(stylesContext);

    return (
        <Container backgroundColor={styles.primaryColor}></Container>
    )
}

export default Header