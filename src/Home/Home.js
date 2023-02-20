import './home.css';
import React from 'react';
// import { Typography } from 'antd';
// const { Text } = Typography;

export default function Home() {
    return (
        <>
            <div className='home-intro-container'>
                <div className='short-self-intro'>
                    <h2 className='home-name-text'>Ruoting Wang</h2>
                    {/* <Text type="secondary">Front end developer based in Melbourne, Australia</Text> */}
                    <h5 className='home-self-intro-text' style={{ opacity: "58%" }}>Front end developer based in Melbourne, Australia</h5>
                    <div className='resume-button-container'>
                        <button className='button resume-btn'>Resume</button>
                    </div>
                </div>
                <div className='profile-pic-container'>
                    <div className='home-landing-pic'>
                        <img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/undraw_Modern_professional.png' style={{ height: '100%', width: '100%' }} alt='landing-pic'></img>
                    </div>
                </div>
            </div>
        </>
    );
}