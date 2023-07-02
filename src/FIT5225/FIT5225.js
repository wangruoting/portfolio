import './FIT5225.css';
import React from 'react';

export default function FIT5225() {
    return (
        <>
            <div className='whole-page-container'>
                <div className='title'>
                    <h2>Image Detection & Storage</h2>
                    <h5 style={{ color: 'GrayText' }}>Feburary 2022 - Coder & Designer</h5>
                </div>

                <div className='FIT5225-home-page-container'>
                    <div style={{ width: '100%' }}>
                        <img className='FIT5225-landing-pic' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/5225-cover.png' ></img>
                    </div>

                    <div className='FIT5225-description-section'>
                        <h2>
                            description
                        </h2>
                        <h3>

                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}