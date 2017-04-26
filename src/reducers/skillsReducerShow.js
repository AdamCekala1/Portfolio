export default function skillsReducerShow(state=[],action){
    switch(action.type){

        case 'SHOW_SKILL':
            action.showed = true;
            return action.showed;
        case 'HIDE_SKILL':
            action.showed = false;
            return action.showed;
            
        default:
            return state;
    }
}