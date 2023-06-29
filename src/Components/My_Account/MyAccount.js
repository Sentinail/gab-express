import React from 'react';
import styles from './MyAccount.css';

function Profile() {
  const getYearOfRegistration = () => {
    return '2022'; 
  };
  const getTotalDonation = () => {
    return '$500'; 
  };

  return (
    <div className="profile-container">
      <div className="left-column">
        <div className="profile-picture"></div>
        <div className="member-since">Member since {getYearOfRegistration()}</div>
        <div className="total-donation">Total donation: {getTotalDonation()}</div>
      </div>
      <div className="center-column">
        <div className="label">Full Name:</div>
        <input type="text" class="input-box" />
        <div className="label">Username:</div>
        <input type="text" class="input-box" />
        <div className="label">Email Address:</div>
        <input type="text" class="input-box" />
        <div className="label">Recent Activity:</div>
        <input type="text" class="input-boxrecent" />
      </div>
      <div className="right-column">
        <div className="about-me">About me</div>
      </div>
    </div>
  );
}

export default Profile;


