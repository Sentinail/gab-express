import React, {useContext} from 'react'
import { FooterContainer, FooterHeader, FooterBody } from './FooterStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'


function Footer() {
  const { primaryColor, secondaryColor } = useContext(stylesContext);

  return (
    <>
      <FooterContainer backgroundColor={primaryColor}>
        <FooterHeader secondaryColor={secondaryColor}></FooterHeader>
        <FooterBody backgroundColor={primaryColor}></FooterBody>
      </FooterContainer>
    </>
  )
}

export default Footer
