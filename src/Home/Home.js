import './home.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // project carousal
    const responsive = {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        1024: {
            items: 3,
            itemsFit: 'contain'
        },
    };

    // project carousal image
    const items = [
        <Link to="/FIT5046" className='redirect-to-project'>
            <div className="project-pic"><img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/FIT5046_project_cover.png'></img><h5>Missing Pets - Android App</h5></div>
        </Link>,
        <Link to="/ie" className='redirect-to-project'>
            <div className="project-pic"><img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/ie-home+page+full.png'></img><h5>Protect Children from Infections - Website</h5></div>
        </Link>,
        <Link to="/FIT5225" className='redirect-to-project'>
            <div className="project-pic"><img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/5225-cover.png'></img><h5>Image Detection & Storage - Website</h5></div></Link>,
        // <div className="project-pic"><img src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/ie-home+page+full.png'></img><h5>hello</h5></div>
    ];

    // footer year
    const currentYear = new Date().getFullYear();

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
                <h5>Website coding <span><i className="fa-solid fa-check"></i></span>UI/ UX design <span><i className="fa-solid fa-check"></i></span> Deploy on cloud <span><i className="fa-solid fa-check"></i></span>Agile team <span><i className="fa-solid fa-check"></i></span>Independent Project <span><i className="fa-solid fa-check"></i></span></h5>
            </div>

            {/* waving lines */}
            <div className='waving-lines-section'>
                {/* <div className='home-reuse-container skills'> */}
                <div className='home-heading-text-container'>
                    <h2 className='home-heading-text skills'>Skills <i className="fa-solid fa-wand-magic-sparkles" style={{ fontSize: '16px' }}></i></h2>
                </div>

                <div className='skillsets-section'>
                    <div className='skillsets'>
                        <h3>Frontend</h3>
                        <h5>React <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>CSS <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>HTML <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>Javascript <span><i className="fa-solid fa-check"></i></span></h5>
                    </div>

                    <div className='skillsets'>
                        <h3>Backend</h3>
                        <h5>Python <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>Java <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>ASP.NET <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>Node JS <span><i className="fa-solid fa-check"></i></span></h5>
                    </div>

                    <div className='skillsets'>
                        <h3>Cloud & Database</h3>
                        <a href='https://www.credly.com/badges/8aa6447d-bd4d-4cd2-aae9-e7fc8f5d214d' target="_blank" style={{ color: 'black' }}><h5>AWS (Certified Practitioner) <span><i className="fa-solid fa-check"></i></span></h5></a>
                        <h5>Oracle Cloud <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>MySQL <span><i className="fa-solid fa-check"></i></span></h5>
                        <h5>NoSQL <span><i className="fa-solid fa-check"></i></span></h5>
                    </div>
                </div>

                {/* <div className='home-detail-service-text'>
                        <div className='home-detail-service-text-container'>
                            <h5>Hosting Website with alternative architecture solutions</h5>
                            <h5>Front end coding using multiple languages</h5>
                            <h5>Database communication</h5>
                            <h5>Public API into uses</h5>
                            <h5>UI/ UX design with simplicity style</h5>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>

            {/* <div className='home-reuse-container certificates'>
                <div className='home-heading-text-container'>
                    <h2 className='home-heading-text'>Certified Skills <i class="fa-solid fa-ranking-star" style={{ fontSize: '16px' }}></i></h2>
                </div>

                <div className='certificates-pic-container'>
                    <div className='certificates-pic'>
                        <img src='/aws-badge.png' style={{ height: '100%', width: '100%' }} alt='aws-cert-pic'></img>
                    </div>

                    <div className='cert-verify-button-container'>
                        <a href='https://www.credly.com/badges/8aa6447d-bd4d-4cd2-aae9-e7fc8f5d214d' target="_blank"><button className='button resume-btn'>Verify Me</button></a>
                    </div>
                </div>

            </div> */}

            <div className='projects-section-container'>
                <div className='introduce-projects'>
                    <h2>Projects  <i className="fa-solid fa-palette" style={{ fontSize: '20px' }}></i></h2>
                </div>

                <AliceCarousel

                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"

                    renderPrevButton={() => { return <button className='button project-btn'>previous</button> }}
                    renderNextButton={() => { return <button className='button project-btn'>next</button> }}
                />


                {/* <div className='home-reuse-container projects1'>
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
                </div> */}
            </div>


            <div className='footer'>
                <h5><span>&copy;</span>{currentYear} wangruoting</h5>
                <div className='footer-icon'>
                    <a href='http://www.linkedin.com/in/ruoting-wang' target="_blank" style={{ color: 'black' }}><p className='footer-item'><i className="fa-brands fa-linkedin"></i></p></a>
                    <p> |</p>
                    <a href='https://github.com/wangruoting' target='_blank' style={{ color: 'black' }}><p className='footer-item'><i className="fa-brands fa-github"></i></p></a>
                    <p> |</p>
                    {/* <p className='footer-item'><i class="fa-solid fa-file"></i></p> */}
                    <i className="fa-regular fa-file-lines"></i>
                </div>
            </div>
        </>
    );
}