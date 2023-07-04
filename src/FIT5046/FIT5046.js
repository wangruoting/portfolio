import './FIT5046.css';
import React from 'react';

export default function FIT5046() {
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
                            An android app helps user to post & find their lost pets.
                        </h3>
                        <h5 style={{ color: 'GrayText' }}>
                            Stack Used: Java, XML, Android Studio
                            {/* Third-Party Login, Mapbox API, Weather API, Firebase Realtime Database, */}
                        </h5>
                    </div>
                </div>
                <h2>Project Demo <i className="fa-solid fa-hand-sparkles"></i></h2>
                <h5 style={{ color: 'GrayText', paddingTop: '10px' }}>Project purpose: Safely bring lost pets home.</h5>
                <h5 style={{ color: 'GrayText' }}>Working in a multicultural agile team of 4.</h5>

                <div className='FIT5046-intro-container'>
                    <div>
                        <img className='FIT5046-pic login' src='../5046-login.png'></img>
                    </div>

                    <div className='FIT5046-description-section login-desc'>
                        <h4>User is required to login to secure their data and pets info.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using FaceBook SDK & Firebase Database.
                        </h5>
                    </div>
                    <div>
                        <img className='FIT5046-pic home' src='../5046-home.png'></img>
                    </div>
                    <div className='FIT5046-description-section home-desc'>
                        <h4>
                            Home page showing post details of current missing or found pets.
                        </h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using Android room database, retrofit and Open Weather API.
                        </h5>
                    </div>

                    <div>
                        <img className='FIT5046-pic map' src='../5046-map-pet-location.png'></img>
                    </div>
                    <div className='FIT5046-description-section pet-detail-desc'>
                        <h4>
                            Each pet details pop up along with options that user prefer to choose.
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