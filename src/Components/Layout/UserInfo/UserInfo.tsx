import  { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { TbColorSwatch } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./UserInfo.css";
import ProfileCard from "../../Common/ProfileCard";

const UserInfo: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="settings-menu">

      <div className="menu-item" onClick={() => toggleItem(0)}>
        <div className="menu-header">
          <span className="menu-icon"><AiOutlineUser /></span>
          <span className="menu-label">Personal Info</span>
          <span className="menu-arrow">
            {openIndex === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {openIndex === 0 && (
          <div className="menu-content">
            <ProfileCard/>
          </div>
        )}
      </div>

      <div className="menu-item" onClick={() => toggleItem(1)}>
        <div className="menu-header">
          <span className="menu-icon"><TbColorSwatch /></span>
          <span className="menu-label">Themes</span>
          <span className="menu-arrow">
            {openIndex === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {openIndex === 1 && (
          <div className="menu-content">
            <p>Content for Themes</p>
          </div>
        )}
      </div>

      <div className="menu-item" onClick={() => toggleItem(2)}>
        <div className="menu-header">
          <span className="menu-icon"><MdOutlinePrivacyTip /></span>
          <span className="menu-label">Privacy</span>
          <span className="menu-arrow">
            {openIndex === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {openIndex === 2 && (
          <div className="menu-content">
            <p>Content for Privacy</p>
          </div>
        )}
      </div>


      <div className="menu-item" onClick={() => toggleItem(3)}>
        <div className="menu-header">
          <span className="menu-icon"><AiOutlineQuestionCircle /></span>
          <span className="menu-label">Help</span>
          <span className="menu-arrow">
            {openIndex === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {openIndex === 3 && (
          <div className="menu-content">
            <p>Content for Help</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default UserInfo;
