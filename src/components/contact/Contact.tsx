import './contact.scss';
import Form from './Form';

export default function Contact () {

    return  (
        <div className='contact' id='contact'>
            <div className='my-info'>
                <h2>Contact Me</h2>
                <h3>emlabonte714@gmail.com</h3>
                <h3>781-985-1677</h3>
            </div>
            <span className='line-break'></span>
            <div className="their-info"> 
                <h3 className='send-message'>or send me a message</h3>
                <Form />
            </div>
        </div>
)
    }