import React from "react";
import { FiEdit2 } from "react-icons/fi";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-row">
        <div className="profile-label">Name</div>
        <div className="profile-value">Mangapathi Justice</div>
        <div className="profile-edit">
          <FiEdit2 />
        </div>
      </div>

      <div className="profile-row">
        <div className="profile-label">Email</div>
        <div className="profile-value">mangapathi@gmail.com</div>
      </div>

      <div className="profile-row">
        <div className="profile-label">Location</div>
        <div className="profile-value">California, USA</div>
      </div>
    </div>
  );
};

export default ProfileCard;
