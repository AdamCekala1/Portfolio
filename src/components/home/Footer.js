import React from 'react';
import {Link} from 'react-router';

const Footer = () => {
    return(
        <footer>
            <div className='social'>
               <Link to='/about' activeClassName='active' className="menu-item"> <i className="fa fa-facebook"></i></Link>
               <Link to='/about' activeClassName='active' className="menu-item"> <i className="fa fa-twitter"></i></Link>
    

            </div>
        </footer>
    );
}

export default Footer;