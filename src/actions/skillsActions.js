

export function itemsFetchDataSuccess(skills) {
//    debugger;
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        skills : skills,
    };
}

export function onClickHandlerSkillShow(showed){
    return{
        type:'SHOW_SKILL',
        showed:showed,
    };
}
export function onClickHandlerSkillStyles(styles){
    return{
        type:'SHOW_STYLES',
        styles:styles,
    };
}
export function onClickHandlerSkillStylesHide(styles){
    return{
        type:'HIDE_STYLES',
        styles:styles,
    };
}
export function onClickHandlerSkillHide(showed){
    return{
        type:'HIDE_SKILL',
        showed:showed
    };
}

export function showSkillHandler(e,styles){
    return(dispatch)=>{
        dispatch(onClickHandlerSkillShow(true));
        dispatch(onClickHandlerSkillStyles(styles));
        
    }
}
export function closeSkillHandler(e){
    return(dispatch)=>{
        dispatch(onClickHandlerSkillHide());
        dispatch(onClickHandlerSkillStylesHide());

    }
}


export function itemsFetchData(url,name) {
    return (dispatch) => {
//        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) =>
                  {
//                dispatch(itemsIsLoading(false));
//                console.log(response)
                return response;
                }
                  ,(error)=>{console.log('error:'+error)})
            .then((response) => 
                  response.json())
            .then((items) =>
                  (dispatch(itemsFetchDataSuccess(items)))
                  ,(error)=>{console.log('error:'+error)});

    };
}