import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigationPane.css'

const NavigationPane = () => {
    return (
        <div className='nav-pane'>
            <ul className='list-unstyled'>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    );
};

export default NavigationPane;