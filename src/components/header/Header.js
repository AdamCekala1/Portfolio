import React from 'react';
import Menu from './Menu.js';

class Header extends React.Component{
    constructor(){
        super();
    }
    closeMenu(){
        document.getElementById("menu-open").checked = false;    
    }
    render(){
        return(
            
                <Menu closeMenu={this.closeMenu}/>
           
        )
    }
    
}
export default Header;