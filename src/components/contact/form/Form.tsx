import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import validateEmail from '../utils/helpers';

export default function Form() {

    const Button = () =>  {
        return(
            <button className='button' type='submit'>SEND</button>
        )
    }

    const SentMessage = () =>  {
        return  (
            <h2>Message Sent. Thank you for contacting me!</h2>
        )
    }

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [sent, showSent]= useState(false);

    const handleChange = (e:any)  =>    {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        if (inputType === 'email') {
            setEmail(inputValue);}
    }
    
    const handleFormSubmit = (e:any) => {
        e.preventDefault();

        if (!validateEmail(email) ) {
            setErrorMessage('Email is invalid');
            window.alert(errorMessage);
        }
        else    {
            emailjs.sendForm('service_po6i9ns', 'template_jd4jdsb', e.target, 'user_meklig0rdiiWqHWwrPqid')
                .then((sent) => {
                    console.log(sent.text);
                }, (error) => {
                    console.log(error.text);
                });
                // e.target.reset;
                showSent(true)
        }
    }

    return (
    <form action="" onSubmit={handleFormSubmit}>
        <input 
        // value="" 
        name='name' 
        placeholder='Your Name' 
        className='name' 
        required></input>

        <input 
        value={email} 
        onChange={handleChange}
        name='email' 
        placeholder='Your Email Address' 
        className='email' 
        id='email' 
        required></input>

        <input 
        // value="" 
        name='body' 
        placeholder="What's on your mind?" 
        className='body' 
        required></input>

        { !sent ? <Button /> : null}

        <div className='row'>
            { sent ? <SentMessage /> : null }
        </div>
    </form>
    );
}
