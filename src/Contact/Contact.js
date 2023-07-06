import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact(props) {

    // pass props from 'App.js' to the 'Contact' component
    const { isOpen, handleClickToOpen, handleClickToClose, closeBtnDisplay } = props;


    // control if display loading icon after click 'submit' button
    const [isLoading, setIsLoading] = useState('hidden');

    // control if display submit window
    const [isSubmit, setIsSubmit] = useState('hidden');

    const handleSubmit = () => {
        setIsSubmit('visible');
        setTimeout(() => setIsSubmit('hidden'), 2000);
    }


    // send email section: using 'EmailJs' package
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setIsLoading('visible')
        emailjs.sendForm('service_gmzf9zd', 'template_41v0nt8', form.current, 'mwi_Ih7XD7WS4cS3V')
            .then((result) => {
                console.log(result.text);
                setIsLoading('hidden');
                handleSubmit();
            }, (error) => {
                console.log(error.text);
            });

        // reset email form once completed
        e.target.reset();
    };

    return (
        <>
            <div className={isOpen ? 'chatbot' : 'chatbot closed'} onClick={handleClickToOpen}>
                {!isOpen && <i className="fa-regular fa-comment message-icon"></i>}
                {isOpen && (
                    <div>
                        <div className='my-icon-section'>
                            <img className='chatbot-icon' src='../sitting.JPG'></img>
                            <h5 className='chatbot-hi-text'>Hi! Glad to see you!</h5>
                        </div>

                        <div className='send-email-section'>
                            <form ref={form} onSubmit={sendEmail}>
                                <label className='email_label'>Name</label><br></br>
                                <input className='email-input normal' type="text" name="user_name" required /><br></br>
                                <label className='email_label'>Email</label><br></br>
                                <input className='email-input normal' type="email" name="user_email" required /><br></br>
                                <label className='email_label'>Message</label><br></br>
                                <textarea className='email-input message' name="message" /><br></br>
                                <input className='email-section-btn sumbit-email-btn' required type="submit" value="Send" />
                            </form>

                            <i className="fa-solid fa-spinner fa-spin-pulse loader-icon" style={{ visibility: isLoading }}></i>

                            <div className='email-sent-window' style={{ visibility: isSubmit }}><h2>I've got your message :)</h2></div>

                        </div>
                    </div>
                )}
            </div>

            <button className='email-section-btn close-pop-up-btn' onClick={handleClickToClose} style={{ visibility: closeBtnDisplay }}>Close <i class="fa-solid fa-xmark"></i></button>
        </>
    );
}