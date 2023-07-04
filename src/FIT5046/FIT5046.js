import './FIT5046.css';
import React, { useEffect } from 'react';

export default function FIT5046() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='whole-page-container'>
                <div className='title'>
                    <h2>Missing Pets - Android App</h2>
                    <h5 style={{ color: 'GrayText' }}>Feburary 2022 - Developer & Designer</h5>
                </div>

                <div className='FIT5046-intro-container'>
                    <div >
                        <img className='FIT5046-pic landing' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/FIT5046_project_cover.png' ></img>
                    </div>

                    <div className='FIT5046-description-section intro'>
                        <h3>
                            Android app helps user to post & find their lost pets.
                        </h3>
                        <h5 style={{ color: 'GrayText' }}>
                            Stacks: Java, XML, Android Studio
                            {/* Third-Party Login, Mapbox API, Weather API, Firebase Realtime Database, */}
                        </h5>
                        <a href='https://github.com/May001122/FIT5046' target='_blank'>
                            <button className='source-code-btn'>Source Code</button>
                        </a>
                    </div>
                </div>
                <h2>Project Demo <i className="fa-solid fa-hand-sparkles"></i></h2>
                <h5 style={{ color: 'GrayText', paddingTop: '10px' }}>Project purpose: Safely bring lost pets home.</h5>
                <h5 style={{ color: 'GrayText' }}>Worked in a multicultural agile team of 4.</h5>

                <div className='FIT5046-intro-container'>
                    <div>
                        <img className='FIT5046-pic login' src='../5046-login.png'></img>
                    </div>

                    <div className='FIT5046-description-section login-desc'>
                        <h4>Sign up & third-party login was implemented for user authentication.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using FaceBook SDK, Firebase API & Room Database.
                        </h5>
                    </div>
                    <div>
                        <img className='FIT5046-pic home' src='../5046-home.png'></img>
                    </div>
                    <div className='FIT5046-description-section home-desc'>
                        <h4>
                            Home page shows post details of current missing or found pets.
                        </h4><br></br><br></br>
                        <h4>Room database was used to store user data and pets info locally.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using Android room database, retrofit and Open Weather API.
                        </h5>
                    </div>

                    <div>
                        <img className='FIT5046-pic map' src='../5046-map-pet-location.png'></img>
                    </div>
                    <div className='FIT5046-description-section pet-detail-desc'>
                        <h4>
                            Each pet details pop up along with options that user prefer to navigate.
                        </h4><br></br><br></br>
                        <h4>
                            Once user granted permission to access the current location, navigation between user and the lost pet is provided.
                        </h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using Mapbox API, FaceBook SDK.
                        </h5>
                    </div>
                </div>
            </div >
        </>
    );
}