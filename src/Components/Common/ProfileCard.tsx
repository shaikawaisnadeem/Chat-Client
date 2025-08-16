import { FiEdit2 } from "react-icons/fi";
import "./ProfileCard.css";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

interface MyTokenPayload {
  username: string;
  email: string;
  exp?: number;
  iat?: number;
}

const ProfileCard = () => {
  const token = Cookies.get('jwt_token');
  const decodedToken: MyTokenPayload | null = token ? jwtDecode<MyTokenPayload>(token) : null;
  console.log(decodedToken);

  return (
    <div className="profile-card">
      <div className="profile-row">
        <div className="profile-label">Name</div>
        <div className="profile-value">{decodedToken?.username || "Guest"}</div>
        <div className="profile-edit">
          <FiEdit2 />
        </div>
      </div>

      <div className="profile-row">
        <div className="profile-label">Email</div>
        <div className="profile-value">{decodedToken?.email || "Not provided"}</div>
      </div>

      {/* <div className="profile-row">
        <div className="profile-label">Location</div>
        <div className="profile-value">California, USA</div>
      </div> */}
    </div>
  );
};

export default ProfileCard;
