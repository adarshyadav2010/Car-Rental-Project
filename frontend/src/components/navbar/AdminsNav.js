import React from 'react';
import '../styles/styles.css';
import applogo from '../images/logo-car-rent.jpg';

export default function AdminNav(){
    return (
        <header>
            <nav id='admin-nav'>
                <div className='admin-img'>
                    <img className='logo-img' src={applogo} type='jpg' alt='app-logo'/>
                </div>
                <div className='admin-logout'>
                    <button className='log-out'> LogOut</button>
                </div>
            </nav>
        </header>
        
    )
}