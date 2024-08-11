import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { Routes, Route } from 'react-router-dom';
import Leaderboard from '../Papes/Leaderboard';
import Shop from '../Papes/Shop';
import Tapos from '../Papes/Tapos';
import Wallet from '../Papes/Wallet';

const Header = () => {
    const [activeNetwork, setActiveNetwork] = useState('mainnet');

    const handleNetworkSwitch = (network) => {
        setActiveNetwork(network);
    };

    return (
        <div className='header'>
            <div className='nav'>
                <a href='/'><img src={logo} alt="Logo" className='logo' /></a>
                <ul className='header-list'>
                    <li><a href='/Tapos'>Tapos</a></li>
                    <li><a href='/Wallet'>Wallet</a></li>
                    <li><a href='/Leaderboard'>Leaderboard</a></li>
                    <li><a href='/Shop'>Shop</a></li>
                    <li className='more'>
                        More
                        <svg className="dropdown-arrow -mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </li>
                </ul>
                <div className='network-switch'>
                    <button 
                        className={`mainnet ${activeNetwork === 'mainnet' ? 'active' : ''}`} 
                        onClick={() => handleNetworkSwitch('mainnet')}
                    >
                        Mainnet
                    </button>
                    <button 
                        className={`testnet ${activeNetwork === 'testnet' ? 'active' : ''}`} 
                        onClick={() => handleNetworkSwitch('testnet')}
                    >
                        Testnet
                    </button>
                </div>
            </div>
            

            <Routes>
                <Route path='/Tapos' element={<Tapos/>}/>
                <Route path='/Wallet' element={<Wallet/>}/>
                <Route path='/Leaderboard' element={<Leaderboard/>}/>
                <Route path='/Shop' element={<Shop/>}/>
            </Routes>
        </div>


    );
}

export default Header;
