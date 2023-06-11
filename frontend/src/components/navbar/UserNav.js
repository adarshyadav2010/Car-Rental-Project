import React from 'react';
import '../styles/styles.css';
import applogo from '../images/logo-car-rent.jpg';
import { Link } from 'react-router-dom';

export default function UserNav(){
    return (
        <header>
            <nav id='user-nav'>
                <div className='user-img'>
                    <img className='logo-img' src={applogo} type='jpg' alt='app-logo'/>
                </div>
                <div className='user-funcs'>
                    <div className='user-logout'>
                        <Link to='' className='text'><span className='text'>My Bookings</span></Link>
                    </div>
                    <div className='user-logout'>
                        <button className='log-out'> LogOut</button>
                    </div>
                </div>
                
            </nav>
        </header>
        
    )
}