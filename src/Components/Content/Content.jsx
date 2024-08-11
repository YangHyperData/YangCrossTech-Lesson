import React from 'react';
import './Content.css';
import Vector from '../../assets/Vector.svg';

const Content = () => {
    return (
        <div className='content'>
            <div className='social-tasks'>
                <h1>Social Tasks</h1>
                <p>Complete the Social Tasks to earn extra $Heart token</p>
                <div className='connect-account'>
                    <h2>Connect Your X account</h2>
                    <p>You need connect your X account to join Social Task</p>
                    <a href='#'>learn more <span>{'>'}</span></a>
                    <br></br>
                    <button className='connect-button'>Connect your X account</button>
                </div>
            </div>
            <div className='paw-prints'>
                <img src={Vector} className='vector-paw' alt='Vector paw print' />
                <img src={Vector} className='vector-paw' alt='Vector paw print' />
                <img src={Vector} className='vector-paw' alt='Vector paw print' />
                <img src={Vector} className='vector-paw' alt='Vector paw print' />
            </div>
            {/* <div className='bottom-buttons'>
                <button className='small-button'>{'<'}</button>
                <button className='small-button'>{'>'}</button>
            </div> */}
        </div>
    );
};

export default Content;
