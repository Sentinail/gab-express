import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

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
  }

  & ul li {
    padding: 40px;
    margin-left: 50px;
    margin-right: 50px;
  }

  & p {
    color: white;
    text-align: center;
    font-size: 24px;
    align-content: center;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

function About() {
  return (
    <StyledDiv img={require("../../Assets/Images/Giving.jpg")}>
      <div className="column1">
        <div className="vision">VISION</div>
        <p>
          <div class="about-section">
            <p>
              "Creating a hunger-free world where no one goes to bed hungry."
            </p>
            <p>
              Improves access to healthy food through establishing innovative
              programming and partnerships to overcome barriers and strengthen
              the community food system.
            </p>
            <ul>
              <li>
                We are a team of passionate developers, designers, and marketers
                who are dedicated to creating beautiful and user-friendly
                websites. We believe that every website should be a reflection
                of its owner's brand, and we take pride in creating websites
                that are both functional and visually appealing.
              </li>
              <li>
                We started our company in 2015 with the goal of helping
                businesses of all sizes achieve their online goals. Since then,
                we have helped hundreds of businesses create websites that have
                helped them grow their businesses and reach their target
                audiences.
              </li>
              <li>
                We are committed to providing our clients with the best possible
                service. We offer a free consultation to help you determine your
                needs, and we work closely with you throughout the entire
                development process. We are also available to provide ongoing
                support after your website is launched.
              </li>
              <li>
                We believe that a great website is more than just a collection
                of pages. It is a powerful tool that can help you achieve your
                business goals. If you are looking for a team of experienced and
                dedicated developers to help you create a website that will help
                you succeed, then we encourage you to contact us today.
              </li>
            </ul>

            <a href="https://www.yourcompany.com/contact">Contact Us</a>
          </div>
        </p>
      </div>
    </StyledDiv>
  );
}

export default About;
