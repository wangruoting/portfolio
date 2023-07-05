import React from 'react';
import './contact.css';

export default function Contact(props) {

    const { isOpen, handleClickToOpen, handleClickToClose, closeBtnDisplay } = props

    return (
        <>
            <div className={isOpen ? 'chatbot' : 'chatbot closed'} onClick={handleClickToOpen}>
                {!isOpen && <i className="fa-regular fa-comment message-icon"></i>}
                {isOpen && (
                    <div>
                        <div className='my-icon-section'>
                            <img className='chatbot-icon' src='../Wavy Buddies - Avatar.png'></img>
                            <h5 className='chatbot-hi-text'>Hi! Glad to see you!</h5>
                        </div>
                        <div>
                            message section
                        </div>
                    </div>
                )}
            </div>
            <button className='closePopUpBtn' onClick={handleClickToClose} style={{ visibility: closeBtnDisplay }}>Close <i class="fa-solid fa-xmark"></i></button>
        </>
    );
}