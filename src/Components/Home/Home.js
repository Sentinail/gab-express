import React, { useContext, useRef, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { HomeContainer, SectionContainer, IntroductionContainer, InterestedToHelpSection, DonateNowButton } from './HomeStyles'
import { sectionDatas } from './SectionDatas'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import logo from "../../Assets/Images/GAB logo.png"

const Section = (props) => {
  const {id, title, paragraph, img} = props;
  const ref = useRef()
  const styles = useContext(stylesContext)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        console.log(el)
        if (el.isIntersecting) {
          el.target.classList.add("slide");
          observer.unobserve(el.target);
        } else if (!el.isIntersecting) {
          el.target.classList.remove("slide");
          el.target.classList.add("animated-slide");
          
        }
        
      })
    }, {threshold: 0.5});
    observer.observe(ref.current)
  }, [])

  return (
    <SectionContainer flexDirection={id % 2 === 0 ? "row-reverse" : "row"} backgroundColor={id % 2 === 0 ? [255, 255, 255, 1] : styles.supportingColor}>
      <div ref={ref} className='items-container'>
        <img src={img} alt={id}></img>
        <div>
          <h1> {title} </h1>
          <p> {paragraph} </p>
        </div>
      </div>
    </SectionContainer>
  )
}

function Home() {
  const ref = useRef()
  const styles = useContext(stylesContext)
  console.log(styles.secondaryColor)

  const moveVehicle = (el) => {
    el.classList.add("move")
  }

  return (  
    <>
      
      <HomeContainer>
        <IntroductionContainer img={require("../../Assets/Images/Sign-in_Bg.jpg")}>
          <h1> GAB EXPRESS </h1>
          <h1> FEED HOPE, SHARE LOVE: BE A HUNGER HERO ON GAB EXPRESS </h1>
          <img src={logo} alt='logo'></img>
        </IntroductionContainer>
        <div className='section-container'>
          {sectionDatas.map(data => {return <Section key={data.id} id={data.id} title={data.title} paragraph={data.paragraph} img={data.img}></Section>})}
          <InterestedToHelpSection>
            <h1>  INTERESTED TO HELP? </h1>
            <DonateNowButton backgroundColor={styles.secondaryColor} onMouseOver={() => {moveVehicle(ref.current)}}>
               DODATE TODAY! 
            </DonateNowButton>  
            <img ref={ref} src={require("../../Assets/Images/icons8-delivery.gif")} alt='vehicle'></img>  
          </InterestedToHelpSection>
        </div>
      </HomeContainer>
        
      <Footer></Footer>
    </>
  )
}

export default Home