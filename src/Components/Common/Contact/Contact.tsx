import './Contact.css';
import { FaUser } from "react-icons/fa6";

export const Contact = () => {
    return (
        <div className='contact-list'>
            <div className='user-profile-pic-wrapper'><FaUser size={20} color='#797c8c' /></div>
            <h2>Mangapathi</h2>
        </div>
    )
}
