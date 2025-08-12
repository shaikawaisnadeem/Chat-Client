import './Settings.css';
import React from 'react'
import { MdEdit } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { MdPhotoCamera } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../../Store/Store';
import { setActive } from '../../Features/ActiveSlice';
import UserInfo from '../../Components/Layout/UserInfo/UserInfo';

const Settings = () => {
  const dispatch = useDispatch();
  const typeUseSelector: TypedUseSelectorHook<RootState> = useSelector;
  const activeStatus = typeUseSelector((state) => state.activestatus.value);
  return (
    <div className='settings-main-div'>
      <div className='settings-edit-div'>
        <div className='settings-head-div'>
          <h1>Settings</h1>
          <div className='edit-profile'>
            <MdEdit size={20} color='#495057' />
          </div>
        </div>
        <div className='profile-pic-div'>
          <AiOutlineUser size={45} />
          <div className='add-camera-pic-div'>
            <MdPhotoCamera size={15} className='camera-add' color='#495057' />
          </div>
        </div>
      </div>
      <div className='user-info'>
        <h1>Mangapathi Justice</h1>
        <div className='user-active-status'>
          <GoDotFill size={20} color={activeStatus === 'active' ? '#06d6a0' : activeStatus === 'away' ? '#ffd166' : '#ef476f'} />
          <select
            value={activeStatus}
            className='select-dropdown'
            onChange={(e) => dispatch(setActive(e.target.value))}
          >
            <option value="active">Active</option>
            <option value="away">Away</option>
            <option value="dnd">Do not disturb</option>
          </select>
        </div>
      </div>
      <div className='user-info-div'>
      <UserInfo/>
      </div>
      <div className='logout-div'>
          <button className='logout-btn'>Logout</button>
      </div>
    </div>
  )
}

export default Settings