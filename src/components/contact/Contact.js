import React from 'react';
import ContactForm from './ContactForm';

class Contact extends React.Component{
    render(){
        return(
                <div className="contact"> 
                    <h1>Contact</h1>
                    <div className="col-xs-12 col-md-6">
                        <h3>Adam Cekala</h3>
                        <h3>666 777 888</h3>
                        <h3>Adam@Cekala.pl</h3>
                        <h3>Adam Cekala street</h3>
                    </div>
                    <div className="col-xs-12 col-md-6">
                    <ContactForm/> 
                    </div>
                    
                </div>
                     

        );
    }
}

export default Contact;