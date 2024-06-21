import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigationPane.css'

const NavigationPane = () => {
    return (
        <div className='nav-pane'>
            <ul className='list-unstyled'>
                <li><Link to='/lutorials/'>Home</Link></li>
                <li><Link to='/lutorials/introduction-to-git/'>Introduction to Git</Link></li>
                <li><Link to='/lutorials/branches-in-git/'>Branches in Git</Link></li>
                <li><Link to='/lutorials/adding-your-changes-to-github/'>Adding Your Changes to GitHub</Link></li>
            </ul>
        </div>
    );
};

export default NavigationPane;