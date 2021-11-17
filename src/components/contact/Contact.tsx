import './contact.scss'

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
                <h3>or send me a message</h3>
                <form id='contact-form'>
                    <input name='name' placeholder='Your Name' className='name' required></input>

                    <input name='email' placeholder='Your Email Address' className='email' id='email' required></input>
                    
                    <input name='body' placeholder="What's on your mind?" className='body' required></input>
                    
                    <button className='button' type='submit'>SEND</button>
                </form>
            </div>
        </div>
)}