import React from 'react';
import Header from './header/Header.js';
import Footer from './home/Footer.js';



class App extends React.Component{
    render(){
        return(
            <div>
                
                <Header/>
                
                <div className='homePage' id="homePage">
 
                        <div className='content'>
                            {this.props.children}
                        </div>
                   
                </div>
            <Footer/>
               
            </div>
        );
    }
}

App.propTypes = {
    
};

export default App;