import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='container-fluid py-2 px-4'>
      <div className='row'>
        <Link className='col-auto' to='/'>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
        </Link>

        <div className='col'>
          <form className='h-100 d-flex align-items-center'>
            <input className='form-control me-3' type='search' placeholder='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
