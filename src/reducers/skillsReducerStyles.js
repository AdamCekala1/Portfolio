export default function skillsReducerStyles(state=[],action){
    switch(action.type){

        case 'SHOW_STYLES':
            console.log(action.styles)
            return action.styles;
        case 'HIDE_STYLES':
            action.styles=null
            console.log(action.styles)
            return action.styles;  
        default:
            return state;
    }
}