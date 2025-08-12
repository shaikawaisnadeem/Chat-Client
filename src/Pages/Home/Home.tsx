import './Home.css';
import React from 'react';
import type {  HTMLAttributes, ReactNode} from 'react'
import Sidenavbar from '../../Components/Layout/Sidenavbar/Sidenavbar';
import SideNavbarChats from '../../Components/Layout/SideNavbarChats/SideNavbarChats';
import WelcomePage from '../../Components/Layout/WelcomePage/WelcomePage';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type{ RootState } from '../../Store/Store';
import Profile from '../Profile/Profile';
import Assistant from '../Assistant/Assistant';
import Contact from '../Contact/Contact';
import CallLog from '../CallLog/CallLog';
import Bookmark from '../Bookmark/Bookmark';
import Settings from '../Settings/Settings';
import { useEffect } from 'react';
import { setValue } from '../../Features/SideNavbarSlice';
interface HomeDiv extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode
}

const Home:React.FC<HomeDiv> = (props) => {
  const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
  const navlink = typedUseSelector((state)=> state.sidenavbar.value);
  console.log(navlink)
  const dispatch = useDispatch();
  useEffect(() => {
    let pathValue = location.pathname === '/' ? '/' : location.pathname.slice(1);
    dispatch(setValue(pathValue));
  }, [location.pathname, dispatch]);

  return (
    <div {...props} className='home-grid-page'>
        <Sidenavbar />
        {navlink === '/' ? <SideNavbarChats/> : '' }
        {navlink === 'profile' ? <Profile/> : ''}
        {navlink === 'assistant' ? <Assistant/> : ''}
        {navlink === 'contact' ? <Contact/> : ''}
        {navlink === 'call-log' ? <CallLog/> : ''}
        {navlink === 'bookmark' ? <Bookmark/> : ''}
        {navlink === 'settings' ? <Settings/> : ''}
        <WelcomePage/>
    </div>
  )
}

export default Home
