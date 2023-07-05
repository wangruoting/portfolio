import React, { useState } from 'react';
import './contact.css';

export default function Contact() {

    const [isOpen, setIsOpen] = useState(false);

    const [openBtnOpacity, setBtnOpenOpacity] = useState(100);
    const [closeBtnOpacity, setCloseBtnOpacity] = useState(0);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOpenPopUp = () => {
        setIsOpen(true);

        setBtnOpenOpacity(0);
        setCloseBtnOpacity(100);
    }

    const handleClosePopUp = () => {
        setIsOpen(false);

        setBtnOpenOpacity(100);
        setCloseBtnOpacity(0);
    }

    return (
        <>
            <div className={isOpen ? 'chatbot' : 'chatbot closed'} onClick={handleClick}>
                {/* <button className='open-pop-up' onClick={handleOpenPopUp} style={{ opacity: openBtnOpacity }}>
                    Contact
                </button> */}

                {isOpen && (
                    <div>
                        <div>
                            Pop up
                        </div>
                        <button className='close-pop-up' onClick={handleClosePopUp} style={{ opacity: closeBtnOpacity }}>Close</button>
                    </div>
                )}

            </div>
        </>
    );
}