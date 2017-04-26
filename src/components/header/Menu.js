import React from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';

const Menu = (props) =>{
    return(
        <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
          <label className="menu-open-button" htmlFor="menu-open">
                <i className="fa fa-bars" aria-hidden="true"></i>
                <i className="fa fa-times" aria-hidden="true"></i>
            </label>
            <div className='box'>
                    <div className="content">
                        <IndexLink  to='/' className="menu-item"> <i className="fa fa fa-home"></i><h4>home</h4> </IndexLink>
                        <Link to='/about' className="menu-item"> <i className="fa fa-user"></i><h4>About me</h4> </Link>
                        <Link to='/contact' className="menu-item"> <i className="fa fa-phone"></i><h4>contact</h4> </Link>
                        <Link to='/skills' className="menu-item"> <i className="fa fa-book"></i><h4>Technologie</h4> </Link>
                        
                        <div className='clearfix'></div>
                    </div>
              </div>


        </nav>

    )
}

export default Menu;