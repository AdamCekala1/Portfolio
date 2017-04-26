export default function skillsReducerDownload(state=[],action){
    switch(action.type){
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.skills;
        default:
            return state;
    }
}
