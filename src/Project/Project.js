import './project.css';
import 'animate.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Project() {

    return (
        <>
            <div className='project-container'>

                <div className='website'>
                    <h2 className='web-title-text bounce-1' style={{ marginLeft: '10%' }}>Website</h2>

                    <div className='website-grid'>
                        <div className='project-section ie'>
                            <Link to="/ie" className='redirect-to-each-project'>
                                <h4>Protect Children from Infections</h4>
                                <p>Octorber 2022</p>
                            </Link>
                        </div>

                        <div className='project-section fit5225'>
                            <Link to="/fit5225" className='redirect-to-each-project'>
                                <h4>Image Detection & Storage</h4>
                                <p>June 2022</p>
                            </Link>
                        </div>

                        <div className='project-section fit5147'>
                            <Link to="/fit5147" className='redirect-to-each-project'>
                                <h4>Music Industry in UK</h4>
                                <p>June 2022</p>
                            </Link>
                        </div>

                        <div className='project-section fit5032'>
                            <Link to="/fit5032" className='redirect-to-each-project'>
                                <h4>Soap Retailer</h4>
                                <p>December 2021</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='android-app'>
                    <h2 className='android-title-text bounce-1' style={{ marginLeft: '10%', marginTop: '5%' }}>Android App</h2>
                    <div className='project-section fit5046'>
                        <Link to="/fit5046" className='redirect-to-each-project'>
                            <h4>Missing Pet</h4>
                            <p>June 2022</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}