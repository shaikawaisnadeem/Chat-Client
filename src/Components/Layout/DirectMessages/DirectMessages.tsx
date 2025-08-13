import AddBtn from '../../Common/AddBtn/AddBtn'
import { Contact } from '../../Common/Contact/Contact'
import './DirectMessages.css'

const DirectMessages = () => {
    return (
        <div className='direct-messages-main'>
            <div className='direct-msg-navbar'>
                <h1 className='direct-msg-head'>DIRECT MESSAGES</h1>
                <AddBtn/>
            </div>
            <div className='direct-div'>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    )
}

export default DirectMessages