function Contact () {
    return  (
        <div className='contact'>
            <div className='my-info'>
                <h2>Contact Me</h2>
                <h3>emlabonte714@gmail.com</h3>
                <h3>781-985-1677</h3>
            </div>
            <h3>or send me a message</h3>
            <form id='contact-form'>
                <input name='name' placeholder='Your Name'></input>

                <input name='email' placeholder='Your Email Address'></input>
                
                <input name='body' placeholder="What's on your mind?"></input>
                
                <button type='submit'>SEND</button>
            </form>
        </div>
)}

export default Contact;