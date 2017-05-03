import React from 'react';
import Skill from './Skill';
import LoadingPage from '../LoadingPage';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/skillsActions';
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 


class Skills extends React.Component{
    constructor() {
        super();
        this.activeStyle = {
                    
                     position:"fixed",
                     top:"0",
                     left:0,
                     top:'50%',
                     left:'50%',
                     padding:'10vh 10vw',
                     width:'90vw',
                     height:'90vh',
                     transform:'translate(-50%,-50%)',
                     zIndex:"99999",
            overflowY:"auto",
                     background:"rgba(0,0,0,0.9)"
                    };
        this.state = {selectedItem: 99,
                      showed:true,
                     };
       
        
    }
    
    activeSkill(e){
       
        this.setState({ selectedItem: e.currentTarget.id,
                       showed:true});
    };
    
    
    
    
    deActiveSkill=(e)=>{
        this.setState(()=>{
            return{showed:false}}
        );
    };




    closeSkillIcon(i){
        if (this.state.selectedItem!==99 && this.state.showed==true){
            return(
                <i onClick={(e)=>this.deActiveSkill(e)}  className="skillIconClose fa fa-times" aria-hidden="true"></i>
            );
        };
    };
   
    handleShowSkill=(skill,i)=>{
        return(
            <div    
                className='skill col-xs-12 col-md-4 col-lg-3'
                style={this.state.selectedItem==i && this.state.showed ?
                    this.activeStyle:{}}
                      key={skill.id}
                >
            <div 
                id={i}
                onClick={(e) => this.activeSkill(e)} 
                 >
                <div  className="content">
                    <Skill 
                        i={i} 
                        selectedItem={this.state.selectedItem}
                        showed={this.state.showed}
                        skill={skill} />
                </div>
            </div>
            </div>
        );
    }
    skillLoading=()=>{
        if(this.props.skillsLoading === false){
            return(
                <div key="2">
                    {this.props.items.map(this.handleShowSkill)}
                </div>
                )
        }else{
            return(
                <LoadingPage key="1"/>
            );
        }
            
      
        
    }
 
    render(){
        return(
            <div className='skills row is-flex'>
                {this.closeSkillIcon()}
                <ReactCSSTransitionGroup
                          transitionName="animation"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                            >
                {this.skillLoading()}
                </ReactCSSTransitionGroup>
             </div>
        );
    }
}







function mapStateToProps(state,ownProps){

    return{
        skillsLoading:state.skillsLoading,
        items: state.skills,
      
    };
}

function mapDispatchToProps(dispatch){
    return{
         actions: bindActionCreators(actionCreators, dispatch) 
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills);