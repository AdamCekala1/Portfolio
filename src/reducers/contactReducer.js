export default  function contactMeReducer(state=[],action){
    switch(action.type){
        case 'ITEMS_FETCH_DATA_SUCCESS_CONTACT':
            console.log(action.skills)
            return action.data;
        default:
            return state;
    }
}

