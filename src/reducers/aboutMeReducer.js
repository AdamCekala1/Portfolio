export default  function aboutMeReducer(state=[],action){
    switch(action.type){
        case 'ITEMS_FETCH_DATA_SUCCESS_ABOUTME':
            console.log(action.skills)
            return action.data;
        default:
            return state;
    }
}

