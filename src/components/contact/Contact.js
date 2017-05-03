import React from 'react';
import {connect} from 'react-redux';
import LoadingPage from '../LoadingPage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 


class Contact extends React.Component{
    
    
    mappingContact=()=>{
        let names = []
        for (let name in this.props.contactData[0]){
            names.push(name);
        }
        return names.map((value)=>{
            return(
                <li className="content row">
                    <h3 className="col-xs-12 col-md-2">
                        {value}:
                    </h3>
                    <h3 className="col-xs-12 col-md-10"> 
                        {this.props.contactData[0][value]}
                    </h3>
                </li>
            );
        }
        );
           
        
    }
    displayDescription=()=>{
        if(this.props.itemsIsLoadingAboutMe === false){
            return(
                <div key="2" className="contact"> 
                    <h1>Kontakt</h1>
                    
                    <ul >
                        {this.mappingContact()}
                        <li className="content row">
                            <h3 className="col-xs-12 col-md-2">
                                CV:
                            </h3>
                            <a target="_blank" href="https://drive.google.com/file/d/0By_hPLDV3-M-WF9mLWEtaVdjcTQ/view?usp=sharing">
                                <h3 className="col-xs-12 col-md-10"> 
                                    CV
                                </h3>
                            </a>
                        </li>
        
                    </ul>
                    
                    
                </div>
            );
        }else{
            return(
                <LoadingPage key="1"/>
            );
        }
    }
    

    render(){
        return(
            <ReactCSSTransitionGroup
                          transitionName="animation"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                            >
            {this.displayDescription()}
            </ReactCSSTransitionGroup>
            );                     

        
    }
}


function mapStateToProps(state,ownProps){

    return{
        itemsIsLoadingAboutMe:state.itemsIsLoadingAboutMe,
        contactData: state.contactData,
      
    };
}

export default connect(mapStateToProps)(Contact)