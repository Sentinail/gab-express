import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-image: url(${(props) => props.img});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

  & .profile-container {
    background-image: url(../../Assets/Images/Giving.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: self-start;
    flex-direction: row;
    min-height: 100vh;
    padding-top: 110px;
    justify-content: space-evenly;
  }

  & .left-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 50px;
    margin-right: 20px;

    & .member-since,
    .total-donation {
      background-color: #4b8dc1;
      border-radius: 5px;
    }
  }

  & .left-column > div:not(:last-child) {
    margin-bottom: 10px;
  }

  & .profile-picture {
    width: 300px;
    height: 300px;
    border-radius: 5px;
  }

  & .member-since {
    width: 300px;
    height: 57px;
  }

  & .total-donation {
    width: 300px;
    height: 57px;
  }

  & .center-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & .fullName,
  .email,
  .username,
  .recentActivity {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  & .fullName {
    width: 580px;
    height: 100px;
    padding-left: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
  }

  & .username {
    width: 580px;
    height: 80px;
    padding-left: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
  }

  & .email {
    width: 580px;
    height: 80px;
    padding-left: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
  }

  & .recentActivity {
    width: 580px;
    height: 344px;
  }

  & .right-column {
    display: flex;
    align-items: center;
    margin-right: 50px;
  }

  & .about-me {
    width: 315px;
    height: 690px;
    background-color: rgba(0, 0, 0, 0.5);          
  }

  & * {
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  & ul {
    list-style: none;
  }

  & ul li {
    padding: 10px;
  }

  & p {
      font-size: 2em;
      font-weight: bold;
  }
`;

function Profile() {
  // Placeholder function to extract the year of registration
  const getYearOfRegistration = () => {
    return "2022"; // Replace with your actual implementation
  };

  // Placeholder function to get total donation
  const getTotalDonation = () => {
    return "$499"; // Replace with your actual implementation
  };

  return (
    <StyledDiv img={require("../../Assets/Images/Giving.jpg")}>
      <div className="profile-container">
        <div className="left-column">
          <div className="profile-picture">
            <img
              src={require("../../Assets/Images/Mukha.jpg")}
              alt="Thor"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="member-since">
            Member since {getYearOfRegistration()}
          </div>
          <div className="total-donation">
            Total donation: {getTotalDonation()}
          </div>
        </div>
        <div className="center-column">
          <div>
            <div className="label">Full name</div>
            <div className="fullName">Craig Wilmore</div>
          </div>
          <div>
            <div className="label">Username</div>
            <div className="username">secretdonor75</div>
          </div>
          <div>
            <div className="label">Email Address</div>
            <div className="email">thexfiles@gmail.com</div>
          </div>
          <div>
            <div className="label">Recent Activity</div>
            <div className="recentActivity">
              <ul>
                <li>2023-01-01 100 USD First donation</li>
                <li>2023-02-14 200 USD Valentine's Day donation</li>
                <li>2023-03-08 100 USD Birthday donation</li>
                <li>2023-04-15 99 USD Random donation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="about-me">
            <p classname="aboutme">About Me</p>
            <ul>
              <li>August 11, 1983, Melbourne, Australia</li>
              <li>Height: 6'3"</li>
              <li>Net worth: $130 million</li>
              <li>Spouse: Elsa Pataky (m. 2010)</li>
              <li>
                Children: India Rose (b. 2012), twins Tristan and Sasha (b.
                2014)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/register"></Link>
    </StyledDiv>
  );
}

export default Profile;
