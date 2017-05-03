import React from 'react';
import {Link} from 'react-router';

const LandingPage=()=>{
    return(
        <div className="landingPage">
            <h3>Adam Cekała </h3>
            <h1>Front end developer</h1>
            <Link to='/about' className='more-button'><h4>Dowiedz się więcej!</h4><span className='triangleButton'></span></Link>
        </div>
    
    );
}
            
export default LandingPage;    