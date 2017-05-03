import React from 'react';

const Skill=(props)=>{
//    console.log(props.skill);
    return(
        
            <div >
                
                <img src={`img/${props.skill.icon}`}/>
                <h3>{props.skill.technology}</h3>
                <p className="skillDescription clearfix" 
                    style={props.selectedItem==props.i && props.showed ?{}:{display:"none"}}> {props.skill.description} </p>
            </div>
 
    );
    
};
export default Skill;