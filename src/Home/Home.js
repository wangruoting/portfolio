import './home.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='home-reuse-container'>
                <div className='short-self-intro'>
                    <h2 className='home-name-text'>Ruoting Wang</h2>
                    {/* <Text type="secondary">Front end developer based in Melbourne, Australia</Text> */}
                    <h5 className='home-self-intro-text' style={{ opacity: "50%" }}>Full time software developer;  Casual reader</h5>
                    <div className='resume-button-container'>
                        <button className='button resume-btn'>Resume</button>
                        {/* <h5>Email</h5> */}
                        {/* <button className='button resume-btn'>Linkedin</button> */}
                    </div>
                </div>
                <div className='profile-pic-container'>
                    <div className='home-landing-pic'>
                        <img className='landing-cat' src='../Cat.png'></img>
                        <img className='landing-stand-read' src='../Standing-Reading.png'></img>
                        <img className='landing-ice-cream-bike' src='../Ice Cream Bike.png'></img>
                        <img className='landing-plant' src='../Plant 2.png'></img>
                        <img className='landing-warning-light' src='../Warning Light.png'></img>
                        {/* <img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/undraw_Modern_professional.png' style={{ height: '100%', width: '100%' }} alt='landing-pic'></img> */}
                    </div>
                </div>
            </div>

            <div className='home-intro-skills'>
                <h5>Website coding <span><i class="fa-solid fa-check"></i></span>UI/ UX design <span><i class="fa-solid fa-check"></i></span> Deploy on cloud <span><i class="fa-solid fa-check"></i></span>Agile team <span><i class="fa-solid fa-check"></i></span>Independent Project <span><i class="fa-solid fa-check"></i></span></h5>
            </div>

            <div className='home-reuse-container services'>
                <div className='home-heading-text-container'>
                    <h2 className='home-heading-text'>Skills <i class="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '16px' }}></i></h2>
                </div>

                <div className='home-detail-service-text'>
                    <div className='home-detail-service-text-container'>
                        <h5>Hosting Website with alternative architecture solutions</h5>
                        <h5>Front end coding using multiple languages</h5>
                        <h5>Database communication</h5>
                        <h5>Public API into uses</h5>
                        <h5>UI/ UX design with simplicity style</h5>
                    </div>
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

            <div className='projects-section-container'>
                <div className='introduce-projects'>
                    <h2>Projects</h2>
                </div>

                <div className='home-reuse-container projects1'>
                    <div className='ie-pic-container'>
                        <Link to="/ie" className='redirect-to-each-project pic'>
                            <div className='ie-pic'>
                                <img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/ie-home+page+full.png' width='100%' height='auto' alt='prevent-disease-project-landing-pic'></img>
                            </div>
                        </Link>
                    </div>
                    <div className='ie-intro-text-container'>
                        <Link to='/ie' className='redirect-to-each-project intro-text'>
                            <h3>
                                Hands on asd for new parents in Australia
                            </h3>
                        </Link>
                        <h5 style={{ opacity: "50%" }}>Coder & Designer</h5>
                    </div>
                </div>
            </div>
        </>
    );
}