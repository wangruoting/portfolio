import './home.css';
import React from 'react';

export default function Home() {
    return (
        <>
            <div className='home-reuse-container'>
                <div className='short-self-intro'>
                    <h2 className='home-name-text'>Ruoting Wang</h2>
                    {/* <Text type="secondary">Front end developer based in Melbourne, Australia</Text> */}
                    <h5 className='home-self-intro-text' style={{ opacity: "50%" }}>Front end developer based in Melbourne, Australia</h5>
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

            <div className='home-intro-skills'>
                <h5>Website coding <span><i class="fa-solid fa-check"></i></span>UI/ UX design <span><i class="fa-solid fa-check"></i></span> Deploy on cloud <span><i class="fa-solid fa-check"></i></span>Agile team <span><i class="fa-solid fa-check"></i></span>Independent Project <span><i class="fa-solid fa-check"></i></span></h5>
            </div>

            <div className='home-reuse-container services'>
                <div className='home-heading-text-container'>
                    <h2 className='home-heading-text'>Services I offer <i class="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '16px' }}></i></h2>
                </div>

                <div className='home-detail-service-text'>
                    <h4>Hosting Website with alternative architecture solutions</h4>
                    <h4>Front end coding using multiple languages</h4>
                    <h4>Database communication</h4>
                    <h4>Public API into uses</h4>
                    <h4>UI/ UX design with simplicity style</h4>
                </div>
            </div>

            <div className='home-reuse-container certificates'>
                <div className='home-heading-text-container'>
                    <h2 className='home-heading-text'>Certified Skills <i class="fa-solid fa-ranking-star" style={{ fontSize: '16px' }}></i></h2>
                    {/* <h3><i class="fa-solid fa-ranking-star"></i></h3> */}
                </div>

                <div className='certificates-pic-container'>
                    <div className='certificates-pic'>
                        <img src='/aws-badge.png' style={{ height: '100%', width: '100%' }} alt='aws-cert-pic'></img>
                        {/* <a href='https://www.credly.com/badges/8aa6447d-bd4d-4cd2-aae9-e7fc8f5d214d' target="_blank"><button className='button verify-btn'>Verify Me</button></a> */}
                    </div>

                    <div className='cert-verify-button-container'>
                        <a href='https://www.credly.com/badges/8aa6447d-bd4d-4cd2-aae9-e7fc8f5d214d' target="_blank"><button className='button resume-btn'>Verify Me</button></a>
                    </div>
                </div>

            </div>


        </>
    );
}