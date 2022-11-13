import './home.css';
import React from 'react';

export default function Home() {
    return (
        <>
            <div className='home-intro-container'>
                <div className='short-self-intro'>
                    <h1>Hi. I'm Ruoting.</h1>
                    <h3>A fresh grad who is wanting to be a front end developer.</h3>
                </div>
                <div>
                    <img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/IMG_0290.JPG' style={{ height: '25%', width: 'auto' }}></img>
                </div>
            </div>
        </>
    );
}