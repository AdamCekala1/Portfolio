import React from 'react';
import {Link} from 'react-router';

const Footer = () => {
    return(
        <footer>
            <div className='social'>
               <a href="https://www.facebook.com/cekala1" className="menu-item"> <i className="fa fa-facebook"></i></a>
               <a href='https://twitter.com/Neratin_Ceka'  className="menu-item"> <i className="fa fa-twitter"></i></a>
                <a href="https://github.com/AdamCekala1"  className="menu-item"> <i className="fa fa-github"></i></a>
    

            </div>
        </footer>
    );
}

export default Footer;