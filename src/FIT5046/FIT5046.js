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
                    <div style={{ width: '100%' }}>
                        <img className='FIT5046-landing-pic' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/FIT5046_project_cover.png' ></img>
                    </div>

                    <div className='FIT5046-description-section'>
                        <h3>
                            An android app helps user to post & find their lost pets.
                        </h3>
                        <h5 style={{ color: 'GrayText' }}>
                            Stack Used: Java, XML, Android Studio
                            {/* Third-Party Login, Mapbox API, Weather API, Firebase Realtime Database, */}
                        </h5>
                    </div>

                    {/* <div>
                        <h1>hi</h1>
                    </div> */}
                </div>


                {/* <div className='desc-below-container'>
                    <h3>
                        hi
                    </h3>
                </div> */}
            </div >
        </>
    );
}