import React from 'react';
import {Link} from 'react-router';

const LandingPage=()=>{
    return(
        <div className="landingPage">
            <h1>adamcekala.pl</h1>
            <h2>Hi, I'm Adam </h2>
            <p>Front end developer</p>
            <img src="https://uinames.com/api/photos/male/21.jpg" alt="profile" className="img-circle"/>
            <Link to='/about' className='more-button'><h4>Know more about me!</h4><span className='triangleButton'></span></Link>
        </div>
    
    );
}
            
export default LandingPage;    