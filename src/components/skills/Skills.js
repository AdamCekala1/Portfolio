import React from 'react';
import Skill from './Skill';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/skillsActions';
import { bindActionCreators } from 'redux'

class Skills extends React.Component{
    constructor() {
        super();
        this.state = {selectedItem: 1,
                     };
        this.activeSkillStyle = {
                width:"90vw",
                height:"90vh",
                position:"fixed",
                top:"5vh",
                left:"5vw",
                zIndex:"9999",
                verticalAlign : "middle",
            };
        
    }
    
    activeSkill(e){
        this.props.actions.showSkillHandler(e,this.activeSkillStyle)
        this.setState({ selectedItem: e.currentTarget.id });
    }
    
    closeSkillIcon(i){
        if (this.props.showed==true){
            return(
                <i onClick={(e)=>this.props.actions.closeSkillHandler(e)} className="fa fa-times" aria-hidden="true"></i>
            );
        }
    }
    handleShowSkill=(skill,i)=>{
        return(
            <div key={skill.id}  className='skill col-xs-12 col-md-6 col-lg-4'>
                {this.closeSkillIcon(i)}
                
                <div id={i}  
                    onClick={(e) => this.activeSkill(e)} 
                    style={this.state.selectedItem==i ?this.props.skillsStyles:null} className="content">
                    
                    <Skill  skill={skill} />
                </div>
            </div>
        );
    }
    render(){

        return(
            <div className='row is-flex'>
                {this.props.items.map(this.handleShowSkill)} </div>
        );
    }
}







function mapStateToProps(state,ownProps){

    return{
        items: state.skills,
        showed:state.showed,
        skillsStyles:state.skillsStyles
    };
}

function mapDispatchToProps(dispatch){
    return{
         actions: bindActionCreators(actionCreators, dispatch) 
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills);