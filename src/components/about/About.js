import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import LoadingPage from '../LoadingPage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class About extends React.Component{
    
    displayDescription=()=>{
        if(this.props.itemsIsLoadingAboutMe === false){
            return(
                <p key="1">
                        {this.props.aboutMe[0].description}
                    </p>
            );
        }else{
            return(
             
                    <LoadingPage key="2"/>
                    
                
                
            );
        }
    }
    render(){
        return(
            <div className='aboutMe'>
                <div className='content'>
                    <h1>O mnie</h1>
                    <h3>kilka slow?</h3>
                       <ReactCSSTransitionGroup
                          transitionName="animation"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                            >
                    {this.displayDescription()}
                    </ReactCSSTransitionGroup>

                </div>
            </div>
        );
            
        
    }
}


function mapStateToProps(state,ownProps){

    return{
        itemsIsLoadingAboutMe:state.itemsIsLoadingAboutMe,
        aboutMe: state.aboutMe,
      
    };
}

export default connect(mapStateToProps)(About);