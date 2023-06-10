import React, { useContext } from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router-dom';

export default function UserHeader() {

    return (
        <header id='header-user'>
            <div className='header-cls'>
                    <li>Origin</li>
                    <li>--:</li>
                    <li>Destination</li>
                    <li>Start Date</li>
                    <li>-</li>
                    <li>End Date</li>
                {/* <div>Origin</div>
                <div>--:</div>
                <div>Destination</div>
                <div>Start Date</div>
                <div>End Date</div> */}
                
                <button className="save-details modify-btn">Modify</button>
                
            </div>
        </header>

    )
}
