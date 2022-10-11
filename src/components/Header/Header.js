import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav >


            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>




        </nav>
    );
};

export default Header;