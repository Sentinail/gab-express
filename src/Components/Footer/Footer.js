import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FooterContainer, FooterHeader, FooterBody } from "./FooterStyles";
import { stylesContext } from "../../ContextProviders/StylesProvider";
import { Link } from "react-router-dom";
import facebook from "../../Assets/Images/facebook.png";
import instagram from "../../Assets/Images/instagram.png";
import linkedin from "../../Assets/Images/linkedin.png";
import youtube from "../../Assets/Images/youtube.png";
import axios from "axios";

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.1s ease, visibility 0.1s ease;
`;

const StyledLink = styled(Link)`
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  color: darkgrey;

  &:hover {
    color: white;
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px;

  & .middle {
    border-left: 1px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    border-right: 1px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;

    & .middle {
    border-left: none;
    border-right: none;
    border-top: 1px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    border-bottom: 1px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
  }
  }
`;

const SendUsAnEmail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 20px;

    & .email-input {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${(props) => props.width};
  color: white;
  font-size: 14px;
  font-weight: 10px;
  text-align: left;
  padding: 20px;

  & h2 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    text-align: center;
    color: #FFFFFF;
  }

  & p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    text-align: left;
    color: #FFFFFF;
    max-width: 500px;
    min-width: 300px;
  }

  & a {
    color: #FFFFFF;
    margin-bottom: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    width: 100px;
    height: 100px;
    font-weight: bold;
    
  }

  & li {
    margin-bottom: 10px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #FFFFFF;
    text-align: center;
    list-style: none;
  }

  & h4 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
  }

  & img {
    width: 30px;
    height: 30px;
    margin: 10px;

    &:hover {
      opacity: 0.5;
      transition: opacity 0.3s ease;
      animation-play-state: paused;
  }}
`;

const EmailInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  min-width: 200px;
  outline: none;
  border: none;

  &.error {
    border: 2px solid red;
  }

  text-align: center;
`;

const EmailBody = styled.textarea`
  min-width: 200px;
  max-width: 200px;
  min-height: 100px;
  border-radius: 5px;
  outline: none;
  border: none;

  text-align: center;
`

const EmailMessageH3Tag = styled.h3`
  color: ${props => {return `rgb(${props.textColor[0]}, ${props.textColor[1]}, ${props.textColor[2]}, ${props.textColor[3]})`}};
  text-align: center;
  letter-spacing: 1px;
`

const SubmitButton = styled.button`
  margin-left: 10px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  border: none;
  border-color: gray;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

function Footer() {
  const { primaryColor, secondaryColor } = useContext(stylesContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [emailMessage, setEmailMessage] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    console.log(isValidEmail)
    
    if (isValidEmail) {
      const result = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_zefjqyg",
        template_id: "template_6psunhw",
        user_id: "SmrA8ku0lE5dwsCBc",
        template_params: {
          user_email: email,
          message: comment,
          reply_to: email,
        }
      })
      if (result.data === "OK") {
        setEmailMessage("Email Sent!")
      }
    } else {
      setEmailMessage("Invalid Email Address")
    }
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      <FooterContainer backgroundColor={primaryColor}>
        <FooterHeader secondaryColor={secondaryColor} />
        <FooterBody backgroundColor={primaryColor} > 
          <FooterRow borderColor={secondaryColor}>
            <Column width="100%">
              <h2>ABOUT US</h2> 
              <br></br>
              <p className="about-us-paragraph">
                We work tirelessly to bridge the gap between surplus food and
                people experiencing hunger, ensuring that valuable resources are
                not wasted. At GabExpress, we are dedicated to making a positive
                impact on the lives of individuals and communities by providing
                access to nutritious food. We believe that no one should go
                hungry, and we strive to address food insecurity through our
                charitable initiatives.
                Together, we can make a difference and ensure that everyone has
                access to nourishing meals and the opportunity for a brighter
                future.
              </p>
            </Column>

            <Column width="100%" className="middle">
              <ul>
                <li>
                  <StyledLink to="../orderform">
                    List of Charity Organizations
                  </StyledLink>{" "}
                </li>
                <li>
                  <StyledLink to="../topdonors">Donor Recognition</StyledLink>{" "}
                </li>
              </ul>
              <SendUsAnEmail>
                <h4>Any concerns? Email us</h4>
                <form className="email-input" action="">
                  <EmailInput onFocus={() => setEmailMessage("")}
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required={true}
                  />
                  <EmailBody onFocus={() => setEmailMessage("")}
                    placeholder="Enter your comment"
                    rows="4"
                    cols="50"
                    value={comment}
                    onChange={handleCommentChange}
                    required={true}
                  >
                  </EmailBody>

                  <EmailMessageH3Tag textColor={secondaryColor}> {emailMessage} </EmailMessageH3Tag>

                  <SubmitButton onClick={(e) => {handleSubmit(e)}} backgroundColor={secondaryColor}>Submit</SubmitButton>
                  
                </form>
              </SendUsAnEmail>
            </Column>

            <Column width="100%">
              <h2>SOCIAL LINKS</h2>
              <br />
              <div>
                <Link to="https://facebook.com">
                  <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="https://youtube.com">
                  <img src={youtube} alt="YouTube" />
                </Link>
                <Link to="https://linkedin.com">
                  <img src={linkedin} alt="LinkedIn" />
                </Link>
                <Link to="https://instagram.com">
                  <img src={instagram} alt="Instagram" />
                </Link>
              </div>
            </Column>
          </FooterRow>
        </FooterBody>
      </FooterContainer>
      <ScrollToTopButton
        id="arrowButton"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        show={showScrollButton}
      >
        &#8679;
      </ScrollToTopButton>
    </footer>
  );
}

export default Footer;
