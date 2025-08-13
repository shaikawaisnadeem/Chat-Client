import AddBtn from '../../Components/Common/AddBtn/AddBtn';
import ContactList from '../../Components/Common/ContactList/ContactList';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-main-div'>
      <div className='contact-search-wrapper'>
        <div className='contact-head-div'>
          <h1>Contacts</h1>
          <AddBtn />
        </div>
        <div className='search-input'>
          <input
            type='text'
            placeholder='Search here...'
            className='input-search-bar'
          />
        </div>
      </div>
      <div className='contact-list-wrapper'>
          <ContactList/>
          <ContactList/>
          <ContactList/>
          <ContactList/>
          <ContactList/>
      </div>
    </div>
  )
}

export default Contact