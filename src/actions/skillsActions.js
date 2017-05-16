

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

export function itemsIsLoadingSkills(bool) {
    return {
        type: 'ITEMS_IS_LOADING_SKILLS',
        isLoading: bool
    };
}






export function itemsFetchData(url) {
    return (dispatch) => {

        dispatch(itemsIsLoadingSkills(true));
        
        
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = url



        fetch(proxyUrl + targetUrl)
            .then((response) =>
                  {
                return response;
                }
                  ,(error)=>{
            console.log('error:'+error)})
            .then((response) => {
                  return response.json()})
            .then((items) =>
                  {dispatch(itemsFetchDataSuccess(items));
                  dispatch(itemsIsLoadingSkills(false));
                  }
                  ,(error)=>{console.log('error:'+error)});

    };
}