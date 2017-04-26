import React from 'react';
import Menu from './Menu.js';

class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <nav>
                <Menu />
            </nav>
        )
    }
    
}
export default Header;