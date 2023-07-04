import './FIT5225.css';
import React, { useEffect } from 'react';

export default function FIT5225() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='whole-page-container'>
                <div className='title'>
                    <h2>Image Detection & Storage</h2>
                    <h5 style={{ color: 'GrayText' }}>Feburary 2022 - Developer & Designer</h5>
                </div>

                <div className='FIT5225-intro-container'>
                    <div style={{ width: '100%' }}>
                        <img className='FIT5225-pic landing' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/5225-cover.png' ></img>
                    </div>

                    <div className='FIT5225-description-section intro'>
                        <h3>
                            Image tag detection and cloud storage
                        </h3>
                        <h5 style={{ color: 'GrayText' }}>
                            Stacks: HTML, CSS, JavaScript, Lambda Function, OpenCV
                        </h5>
                        <a href='https://github.com/Diana-Pan/FIT5225' target='_blank'>
                            <button className='source-code-btn'>Source Code</button>
                        </a>
                    </div>
                </div>

                <h2>Project Demo <i className="fa-solid fa-hand-sparkles"></i></h2>
                <h5 style={{ color: 'GrayText', paddingTop: '10px' }}>Project purpose: Safely bring lost pets home.</h5>
                <h5 style={{ color: 'GrayText' }}>Worked in a multicultural agile team of 4.</h5>


                <div className='FIT5225-intro-container'>
                    <div>
                        <img className='FIT5225-pic login' src='../5225-diagram.jpg'></img>
                    </div>

                    <div className='FIT5046-description-section login-desc'>
                        <h4>Sign up & third-party login was implemented for user authentication.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using FaceBook SDK, Firebase API & Room Database.
                        </h5>
                    </div>

                </div>

            </div>
        </>
    );
}