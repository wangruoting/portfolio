import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact(props) {

    const { isOpen, handleClickToOpen, handleClickToClose, closeBtnDisplay } = props;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gmzf9zd', 'template_41v0nt8', form.current, 'mwi_Ih7XD7WS4cS3V')
            .then((result) => {
                // <h4>I've got your message ^^</h4>
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

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
                        </div>
                    </div>
                )}
            </div>
            <button className='email-section-btn close-pop-up-btn' onClick={handleClickToClose} style={{ visibility: closeBtnDisplay }}>Close <i class="fa-solid fa-xmark"></i></button>
        </>
    );
}