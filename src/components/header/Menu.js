import React from 'react';
import {Link,IndexLink} from 'react-router';
import {connect} from 'react-redux';

const Menu = (props) =>{
    
    return(
        <nav className="menu">
            <table>
              <input id="menuCheck" type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
              <label className="menu-open-button" htmlFor="menu-open">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </label>
                <div className='box'>
                        <div className="content">
                            <IndexLink onClick={(e)=>props.closeMenu()} to='/' activeClassName="activeLink" className="menu-item"> <i className="fa fa fa-home"></i><h4>Home</h4> </IndexLink>
                            <Link  onClick={(e)=>props.closeMenu()} to='about' activeClassName="activeLink" className="menu-item"> <i className="fa fa-user"></i><h4>O mnie</h4> </Link>
                            <Link onClick={(e)=>props.closeMenu()} to='/contact' activeClassName="activeLink" className="menu-item"> <i className="fa fa-phone"></i><h4>Kontakt</h4> </Link>
                            <Link onClick={(e)=>props.closeMenu()} to='/skills' activeClassName="activeLink" className="menu-item"> <i className="fa fa-book"></i><h4>Technologie</h4> </Link>

                            <div className='clearfix'></div>
                        </div>
                  </div>

            </table>
        </nav>

    )
}

export default Menu;