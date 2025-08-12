import './Sidenavbar.css';
import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaUserLarge } from 'react-icons/fa6';
import { IoMdChatboxes } from 'react-icons/io';
import { BiSolidUserDetail } from 'react-icons/bi';
import { MdPhoneInTalk } from "react-icons/md";
import { MdSettings } from 'react-icons/md';
import { HiOutlineMoon } from 'react-icons/hi2';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../../../Store/Store';
import { setValue } from '../../../Features/SideNavbarSlice';
import { SiRobotframework } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";
import { setTheme } from '../../../Features/ThemeSlice';
import { TiWeatherSunny } from "react-icons/ti";

interface DivType extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Sidenavbar: React.FC<DivType> = (props) => {
  const dispatch = useDispatch();
  const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
  const sideSelectedValue = typedUseSelector((state) => state.sidenavbar.value);
  const ThemeValue = typedUseSelector((state) => state.theme.value);
  const toggleTheme = () => {
    dispatch(setTheme(ThemeValue === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className='icons-wrapper' {...props}>
      <div className='toggle-icons-wrapper'>
        <BsChatRightTextFill size={30} color='#2aa152ff' />

        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'icon active chat-icon' : 'icon chat-icon')}
          onClick={() => dispatch(setValue('/'))}
        >
          <IoMdChatboxes size={30} />
        </NavLink>

        <NavLink
          to='/assistant'
          className={({ isActive }) => (isActive ? 'icon active assistant-icon' : 'icon assistant-icon')}
          onClick={() => dispatch(setValue('assistant'))}
        >
          <SiRobotframework size={30} />
        </NavLink>

        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'icon active contact-icon' : 'icon contact-icon')}
          onClick={() => dispatch(setValue('contact'))}
        >
          <BiSolidUserDetail size={30} />
        </NavLink>

        <NavLink
          to='/call-log'
          className={({ isActive }) => (isActive ? 'icon active call-icon' : 'icon call-icon')}
          onClick={() => dispatch(setValue('call-log'))}
        >
          <MdPhoneInTalk size={30} />
        </NavLink>

        <NavLink
          to='/dashboard'
          className={({ isActive }) => (isActive ? 'icon active bookmark-icon' : 'icon bookmark-icon')}
          onClick={() => dispatch(setValue('dashboard'))}
        >
          <SiGoogleanalytics size={30} />
        </NavLink>

        {/* <NavLink
          to='/settings'
          className={({ isActive }) => (isActive ? 'icon active settings-icon' : 'icon settings-icon')}
          onClick={() => dispatch(setValue('settings'))}
        >
          <MdSettings size={30} />
        </NavLink> */}
      </div>

      <div className='profile-icons-wrapper'>
        {ThemeValue === 'light' ? <TiWeatherSunny size={40} className='theme-icon' onClick={toggleTheme} /> :
          <HiOutlineMoon size={40} className='theme-icon' onClick={toggleTheme} />}

        <NavLink
          to='/profile' 
          className={({ isActive }) => (isActive ? 'icon active user-icon' : 'icon user-icon')}
          onClick={() => dispatch(setValue('profile'))}   
        >
          <FaUserLarge size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidenavbar;
