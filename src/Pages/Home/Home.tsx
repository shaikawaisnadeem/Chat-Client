import './Home.css';
import React from 'react';
import type {  HTMLAttributes, ReactNode} from 'react'
import Sidenavbar from '../../Components/Layout/Sidenavbar/Sidenavbar';
import SideNavbarChats from '../../Components/Layout/SideNavbarChats/SideNavbarChats';
import WelcomePage from '../../Components/Layout/WelcomePage/WelcomePage';

interface HomeDiv extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode
}

const Home:React.FC<HomeDiv> = (props) => {
  return (
    <div {...props} className='home-grid-page'>
        <Sidenavbar />
        <SideNavbarChats/>
        <WelcomePage/>
    </div>
  )
}

export default Home