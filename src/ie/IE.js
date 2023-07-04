import './ie.css';
import React, { useEffect } from 'react';

export default function IE() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div className='whole-page-container'>
                <div className='title'>
                    <h2>Protect Children From Infections - Graduate Project</h2>
                    <h5 style={{ color: 'GrayText' }}>IT for social good project</h5>
                    <h5 style={{ color: 'GrayText' }}>October 2022 - Developer & Designer</h5>
                </div>

                <div className='ie-intro-container'>
                    <div style={{ width: '100%' }}>
                        <img className='ie-pic landing' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/ie-home+page+full.png'></img>
                    </div>

                    <div className='ie-description-section intro'>
                        <h3>
                            Assist new parents in familiarizing themselves with infectious diseases and recommended vaccinations in Australia, ensuring a safer environment for children.
                        </h3>

                        <h5 style={{ color: 'GrayText' }}>
                            Stacks: React.js, AWS Lambda Function, Dynamo Database, RESTful API, S3 Bucket, Route53, CloudFront
                        </h5>
                        <a href='https://github.com/LiquidSayuki/fit5120-ta1-front' target='_blank'>
                            <button className='source-code-btn'>Source Code</button>
                        </a>
                    </div>
                </div>

                <h2>Project Demo <i className="fa-solid fa-hand-sparkles"></i><span style={{ fontSize: '13px', color: 'GrayText' }}>&nbsp;&nbsp;&nbsp;(Showing partially my contributed coding part)</span></h2>
                <h5 style={{ color: 'GrayText', paddingTop: '10px' }}>Project purpose: Protect children from infectious disease.</h5>
                <h5 style={{ color: 'GrayText' }}>Worked in a multicultural and cross-subject agile team of 5.</h5>
                <h5 style={{ color: 'GrayText' }}>React framework was used as frontend.</h5>
                <h5 style={{ color: 'GrayText' }}>Primarily utilized AWS Serverless - Lambda function & Dynamo Database as the backend.</h5>

                <div className='ie-intro-container'>
                    {/* vaccine description section */}
                    <div>
                        <video className='video vaccine' preload loop autoPlay muted playsInline='false'>
                            <source src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/2x-fast-ie-vaccine-edit.mp4' type="video/mp4"></source>
                        </video>
                    </div>

                    <div className='ie-description-section home'>
                        <h4>Essential vaccination information are provided to support new parents who may be unfamiliar with the topic.</h4><br></br><br></br>
                        <h4>Along with recommended vaccinations for children, categorized according to age groups.</h4>
                        <h5 style={{ color: 'GrayText' }}>Implemented using Antd, Dynamo Databse.</h5>
                    </div>

                    {/* outdoor 3d section */}
                    <div>
                        <video className='video 3d' preload loop autoPlay muted playsInline='false'>
                            <source src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/2x-fast-ie-3d-edit.mp4' type="video/mp4"></source>
                        </video>
                    </div>

                    <div className='ie-description-section outdoor-3d'>
                        <h4>A captivating 3D animation was implemented to add an element of fun to the learning experience.</h4>
                        <h5 style={{ color: 'GrayText' }}>Implemented using Spline.</h5>
                    </div>

                    {/* outdoor quiz description section */}
                    <div>
                        <video className='video outdoor-quiz' preload loop autoPlay muted playsInline='false'>
                            <source src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/2x-fast-outdoor-quiz.mp4' type="video/mp4"></source>
                        </video>
                    </div>

                    <div className='ie-description-section outdoor-quiz'>
                        <h4>To enhance parental awareness of often-neglected infectious diseases, a quiz related to safety during outdoor play has been implemented.</h4><br></br>
                        <h4>Upon completion of the quiz, an interactive result analysis will be presented, showcasing the user's proficiency in different areas and providing insights on sections that require improvement.</h4>
                        {/* <h5 style={{ color: 'GrayText' }}>Implemented using </h5> */}
                    </div>

                    {/* outdoor intro section */}
                    {/* <div>
                        <video className='video outdoor-intro' loop autoPlay muted>
                            <source src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/home-outdoor-section.mov' type="video/mp4"></source>
                        </video>
                    </div>

                    <div className='ie-description-section outdoor-intro'>
                        <h4>desc</h4>
                        <h5 style={{ color: 'GrayText' }}>Implemented using </h5>
                    </div> */}

                </div>
            </div>
        </>
    );
}