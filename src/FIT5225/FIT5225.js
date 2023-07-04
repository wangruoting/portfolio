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
                    <h5 style={{ color: 'GrayText' }}>May 2022 - Developer & Designer</h5>
                </div>

                <div className='FIT5225-intro-container'>
                    <div style={{ width: '100%' }}>
                        <img className='FIT5225-pic landing' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/5225-cover.png' ></img>
                    </div>

                    <div className='FIT5225-description-section intro'>
                        <h3>
                            A web application powered by the OpenCV library, capable of detecting image tags, find images by tags and images cloud storage.
                        </h3>
                        <h5 style={{ color: 'GrayText' }}>
                            Stacks: OpenCV, HTML, CSS, JavaScript, AWS Lambda Function, Dynamo Database
                        </h5>
                        <a href='https://github.com/Diana-Pan/FIT5225' target='_blank'>
                            <button className='source-code-btn'>Source Code</button>
                        </a>
                    </div>
                </div>

                <h2>Project Demo <i className="fa-solid fa-hand-sparkles"></i></h2>
                <h5 style={{ color: 'GrayText', paddingTop: '10px' }}>The project highlighted the practical implementation of AWS Cloud technologies.</h5>
                <h5 style={{ color: 'GrayText' }}>Worked in an agile team of 4.</h5>

                <div className='FIT5225-intro-container'>
                    <div>
                        <img className='FIT5225-pic system-architecture' src='../5225-diagram.jpg'></img>
                    </div>

                    <div className='FIT5225-description-section system-architecture'>
                        <h2>AWS System Architecture</h2><br></br><br></br>
                        <h4>The application utilizes Cognito for user authentication and IAM role-based security, employs RESTful APIs to connect the frontend with the backend, leverages Lambda functions to handle user queries and OpenCV library, and stores images and images tags in S3 bucket.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using Cognito, IAM security, RESTful API, CloudWatch, AWS Lambda, Dynamo Database
                        </h5>
                    </div>
                </div>

                <div className='FIT5225-intro-container'>
                    <div>
                        <img className='FIT5225-pic find-image' src='../5225-find-image-by-tag.png'></img>
                    </div>

                    <div className='FIT5225-description-section find-image'>
                        <h4>Users can search for images by entering tags, and the application will return the corresponding object URLs of the relevant images as results.</h4>
                    </div>
                </div>

            </div>
        </>
    );
}