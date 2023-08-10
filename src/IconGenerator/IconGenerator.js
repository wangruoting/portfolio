import './icongenerator.css';
import React, { useEffect } from 'react';

export default function IconGenerator() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='whole-page-container'>
                <div className='title'>
                    <h2>Imagin - SaaS Web App</h2>
                    <h5 style={{ color: 'GrayText' }}>July 2023 - Backend Developer</h5>
                </div>

                <div className='icongen-intro-container'>
                    <div style={{ width: '100%' }}>
                        <img className='icongen-pic landing' src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/imagin-landing.png'></img>
                    </div>

                    <div className='icongen-description-section intro'>
                        <h3>
                            A logo and icon creator driven by OpenAI&#39;s DALL-E, equipped with pre-configured prompt styles to boost the quality of the generated output.
                        </h3>

                        <h5 style={{ color: 'GrayText' }}>
                            Stacks: OpenAI DALL-E, Next.js, TypeScript, tRPC, Stripe, PostgresSQL, AWS Amplify CI/CD, AWS SES, AWS S3 Bucket, CloudFront
                        </h5>
                        {/* <a href='https://github.com/wangruoting/SaaS-Icon-generation-app' target='_blank'>
                            <button className='source-code-btn'>Source Code</button>
                        </a> */}
                    </div>
                </div>

                <h2>Project Demo <i className="fa-solid fa-hand-sparkles"></i></h2>
                <h5 style={{ color: 'GrayText', paddingTop: '10px' }}>Worked in an agile team of 2.</h5>
                <h5 style={{ color: 'GrayText' }}>Officially released on Product Hunt with 75+ Upvotes and Weekly Ranking #28.</h5>
                <h5 style={{ color: 'GrayText' }}>Over 100+ users within the initial three days of launch.</h5>

                <div className='icongen-intro-container'>

                    <div>
                        <video className='video demo' preload loop autoPlay muted playsInline='false'>
                            <source src='https://letsstoreinfolalal.s3.ap-southeast-2.amazonaws.com/icongen-demo.mp4' type="video/mp4"></source>
                        </video>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Showcasing the icon and logo generation process, featuring input prompts, selected colors, and pre-configured styles.</h4>
                        <br></br>
                        <h4>Prompts are supported for use in most of the languages.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../upvotes-product-hunt.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>The product is officially launched on Product Hunt with 70+ upvotes.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Launched using Product Hunt.
                        </h5>
                    </div>


                    <div>
                        <img className='icongen-pic' src='../launch-data.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Our launch page and Product Hunt data with a day rank of #28.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-NextAuth.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>The project highlights NextAuth authentication, enabling users to log in through Google and Discord. Data security for email authentication is reinforced using the AWS SES service.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using AWS SES, Google authentication, Discord authentication.
                        </h5>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-generate-page.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Creating icons or logos using OpenAI's DALL-E is achieved by inputting prompts, and upon generating the icon, users can proceed to download it.</h4>
                        <br></br>
                        <h4>1 credit per generation.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using AWS S3 Bucket, DALL-E.
                        </h5>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-profile.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Users can locate the icons they have generated on the profile page.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../community-showcase.JPEG'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>On the community page, users can discover icons generated by fellow users, providing inspiration and enjoyment for their own creations.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-pricing-page.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Users can topup credits by accessing the pricing page.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-stripe-page.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Stripe has been integrated to enhance payment security, offering a range of payment options including Debit cards and WeChat Pay, among others.</h4>
                        <h5 style={{ color: 'GrayText' }}>
                            Implemented using Stripe.
                        </h5>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-recipe.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Additional services designed to assist users in generating icons through prompt tips.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-recipe-showcase1.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Showcase of prompts, colors, and styles of the generated pictures.</h4>
                    </div>

                    <div>
                        <img className='icongen-pic' src='../icongen-recipe-showcase2.png'></img>
                    </div>
                    <div className='icongen-description-section'>
                        <h4>Showcase of prompts, colors, and styles of the generated pictures.</h4>
                    </div>

                </div>

            </div>
        </>
    );
}