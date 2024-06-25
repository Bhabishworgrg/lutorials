import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigationPane.css'

const NavigationPane = () => {
    return (  
        <div className='nav-pane'>
            <ul className='list-unstyled'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/introduction-to-git/'>Introduction to Git</Link></li>
                <li><Link to='/branches-in-git/'>Branches in Git</Link></li>
                <li><Link to='/adding-your-changes-to-github/'>Adding Your Changes to GitHub</Link></li>
                <li><Link to='/introduction-to-godot/'>Introduction to Godot</Link></li>
                <li><Link to='/godot-interface'>Godot Interface</Link></li>
            </ul>
        </div>
    );
};


export default NavigationPane;