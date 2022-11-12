import './project.css';
import 'animate.css';
import React from 'react';
import { DesktopOutlined } from '@ant-design/icons';

export default function Project() {

    return (
        <>
            <div className='project-container'>

                <div className='website'>
                    <h2 className='web-title-text bounce-1' style={{ marginLeft: '10%' }}>Website</h2>
                    {/* <i class="fa-solid fa-desktop"></i> */}

                    <div className='website-grid'>
                        <div className='project-section ie'>
                            <h4>Protect Children from Infections</h4>
                            <p>Octorber 2022</p>
                        </div>

                        <div className='project-section fit5225'>
                            <h4>Image Detection & Storage</h4>
                            <p>June 2022</p>
                        </div>

                        <div className='project-section fit5147'>
                            <h4>Music Industry in UK</h4>
                            <p>June 2022</p>
                        </div>

                        <div className='project-section fit5032'>
                            <h4>Soap Retailer</h4>
                            <p>December 2021</p>
                        </div>
                    </div>
                </div>

                <div className='android-app'>
                    <h2 className='android-title-text bounce-1' style={{ marginLeft: '10%', marginTop: '5%' }}>Android App</h2>
                    <div className='project-section fit5046'>
                        <h4>Missing Pet</h4>
                        <p>June 2022</p>
                    </div>

                </div>
            </div>
        </>
    );
}