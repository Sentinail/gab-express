import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { stylesContext } from "../../ContextProviders/StylesProvider";

const StyledDiv = styled.div`
  background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

  & .column1 {
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-50px);}
        to { opacity: 1; transform: translateY(0px);}
    }
  }

  & .about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    & h1#quote {
      padding: 40px;
      font-size: 48px;
      color: #FFFFFF;
      text-align: center;
    }
  }

  & a {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
    padding: 40px;
    margin-top: 40px;
    font-size: 24px;
  }
        

  & .column1 {
  }

  & .vision {
    color: white;
    text-align: center;
    align-content: center;
    gap: 50px;
    font-size: 75px;
    justify-content: center;
    padding-top: 115px;
  }

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    & p {
      color: white;
      text-align: center;
      font-size: 24px;
      align-content: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      max-width: 800px;
    }
  }

  & ul li {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 80px;
    margin-left: 50px;
    margin-right: 50px;

  @media screen and (max-width: 576px) {
      & {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
`;

function About() {
  const styles = useContext(stylesContext)

  return (
    <StyledDiv img={require("../../Assets/Images/Giving.jpg")} backgroundColor={styles.primaryColor} secondaryColor={styles.secondaryColor}>
      <div className="column1">
        <div className="vision">VISION</div>
        <div>
          <div className="about-section">
            <h1 id="quote">
              "CREATING A HUNGER-FREE WORLD WHERE NO ONE GOES TO BED HUNGRY."
            </h1>
            <ul>
              <li>
                <p>
                  Improves access to healthy food through establishing innovative
                  programming and partnerships to overcome barriers and strengthen
                  the community food system.
                </p>
              </li>
              <li>
                <p>
                  We are a team of passionate developers, designers, and marketers
                  who are dedicated to creating beautiful and user-friendly
                  websites. We believe that every website should be a reflection
                  of its owner's brand, and we take pride in creating websites
                  that are both functional and visually appealing.
                </p>
              </li>
              <li>
                <p>
                  We started our company in 2015 with the goal of helping
                  businesses of all sizes achieve their online goals. Since then,
                  we have helped hundreds of businesses create websites that have
                  helped them grow their businesses and reach their target
                  audiences.
                </p>
              </li>
              <li>
                <p>
                  We are committed to providing our clients with the best possible
                  service. We offer a free consultation to help you determine your
                  needs, and we work closely with you throughout the entire
                  development process. We are also available to provide ongoing
                  support after your website is launched.
                </p>
              </li>
              <li>
                <p>
                  We believe that a great website is more than just a collection
                  of pages. It is a powerful tool that can help you achieve your
                  business goals. If you are looking for a team of experienced and
                  dedicated developers to help you create a website that will help
                  you succeed, then we encourage you to contact us today.
                </p>
              </li> 
            </ul>
            <Link href="https://www.yourcompany.com/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default About;
