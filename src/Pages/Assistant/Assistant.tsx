import AssistantIcon from '../../Components/Common/Assistant/AssistantIcon';
import './Assistant.css';
import React from 'react';
import { TbSend } from "react-icons/tb";

const Assistant = () => {
  return (
    <div className='assistant-main-div'>
        <div className='assistant-head-div'>
          <h1>Assistant</h1>
          <AssistantIcon />
        </div>

        <div className='assistant-body'>
        </div>

        <div className='assistant-footer'>
          <input type='text' placeholder='Ask anything'/>
          <TbSend size={25}/>
        </div>
    </div>
  );
};

export default Assistant;
