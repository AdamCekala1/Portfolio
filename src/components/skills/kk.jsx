import React from 'react';
import Skill from './Skill';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/skillsActions';
import { bindActionCreators } from 'redux'

class Skills extends React.Component{
    constructor() {
        super();
        this.state = {selectedItem: 99,
                     };
       
        
    }
    
    activeSkill(e){
       
        this.setState({ selectedItem: e.currentTarget.id });
    }
    
   
    handleShowSkill=(skill,i)=>{
        return(
            <div key={skill.id}
                id={i}
                onClick={(e) => this.activeSkill(e)} 
                style={this.state.selectedItem==i ?
                    {position:"absolute",
                     top:"0",
                     left:0,
                     width:"50vw",
                     heigth:"50vh",
                     margin:"25vh 25vw",
                     zIndex:"99999",
                     background:"rgba(0,0,0,0.8)"
                    }:{color:"green"}}
                className='skill col-xs-12 col-md-4 col-lg-3'>
                
                
                <div   
                    
                     className="content">
                    
                    <Skill i={i} selectedItem={this.state.selectedItem} skill={skill} />
                </div>
            </div>
        );
    }
    render(){

        return(
            <div className='skills row is-flex'>
                {this.props.items.map(this.handleShowSkill)} </div>
        );
    }
}







function mapStateToProps(state,ownProps){

    return{
        items: state.skills,
      
    };
}

function mapDispatchToProps(dispatch){
    return{
         actions: bindActionCreators(actionCreators, dispatch) 
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills);