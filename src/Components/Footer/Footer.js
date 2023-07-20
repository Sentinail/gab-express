import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FooterContainer, FooterHeader, FooterBody } from "./FooterStyles";
import { stylesContext } from "../../ContextProviders/StylesProvider";
import { Link } from "react-router-dom";
import facebook from "../../Assets/Images/facebook.png";
import instagram from "../../Assets/Images/instagram.png";
import linkedin from "../../Assets/Images/linkedin.png";
import youtube from "../../Assets/Images/youtube.png";

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

const Line = styled.hr`
  width: 90%;
  margin: 0 auto;
  border: 1px solid white;
  opacity: 0.5;
  margin-top: 40px;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: ${(props) => props.width};
  color: white;
  font-size: 14px;
  font-weight: 10px;
  line-height: 1;
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  padding-left: 25px;
  align-items: center;

  & h2 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    text-align: center;
    color: darkgrey;
  }

  & p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    text-align: center;
    color: darkgrey;
  }

  & a {
    color: darkgray;
    margin-bottom: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    width: 100px;
    height: 100px;
  }

  & li {
    margin-bottom: 10px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: darkgrey;
  }

  & h4 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 14px;
    text-align: center;
    color: White;
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
  width: 200px;
  padding: 5px;
  border-radius: 5px;

  &.error {
    border: 2px solid red;
  }
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(75, 141, 193);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  border: none;
  border-color: gray;
  cursor: pointer;
  transition: opacity 0.3s ease;
`;

function Footer() {
  const { primaryColor, secondaryColor } = useContext(stylesContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [emailError, setEmailError] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    window.alert('Your comment has been successfully sent to gabexpresssample@gmail.com');
    
    // Reset the form fields
    setEmail('');
    setComment('');
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

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
        <Line />
        <FooterRow>
          <Column width="50%">
            <h2>ABOUT US</h2>
            <br></br>
            <p>
              We work tirelessly to bridge the gap between surplus food and
              people experiencing hunger, ensuring that valuable resources are
              not wasted. At GabExpress, we are dedicated to making a positive
              impact on the lives of individuals and communities by providing
              access to nutritious food. We believe that no one should go
              hungry, and we strive to address food insecurity through our
              charitable initiatives.
              <span></span>
              Together, we can make a difference and ensure that everyone has
              access to nourishing meals and the opportunity for a brighter
              future.
            </p>
          </Column>

          <Column width="15%">
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
            <div>
              <br />
              <h4>Any concerns? Email us</h4>
              <EmailInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <textarea
                placeholder="Enter your comment"
                rows="4"
                cols="50"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
              <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </div>
          </Column>

          <Column width="30%">
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
        <Line />
        <FooterBody backgroundColor={primaryColor} />
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
