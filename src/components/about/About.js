import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div className='container'>
                <h1>www.strona.pl</h1>
                <p>Curabitur malesuada accumsan eros at condimentum. Quisque a hendrerit lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a malesuada augue. Vivamus cursus luctus nibh, nec mollis odio hendrerit et. In convallis, enim dictum ultrices aliquam, elit dolor euismod risus, vel accumsan lacus libero a quam. Nulla vitae augue efficitur, convallis felis sed, imperdiet erat. Duis et ligula vel massa commodo vestibulum. Praesent ut auctor orci.</p>
                <img src="https://uinames.com/api/photos/male/21.jpg" alt="profile" className="img-circle"/>
            </div>
        );
            
        
    }
}

export default About;