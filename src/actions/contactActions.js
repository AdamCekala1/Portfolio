export function itemsFetchDataSuccessContact(data) {
//    debugger;
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS_CONTACT',
        data : data,
    };
}



export function itemsIsLoadingContact(bool) {
    return {
        type: 'ITEMS_IS_LOADING_CONTACT',
        isLoading: bool
    };
}


export function itemsFetchDataContact(url,name) {
    return (dispatch) => {
        dispatch(itemsIsLoadingContact(true));
        fetch(url)
            .then((response) =>
                  {
                
//                console.log(response)
                return response;
                }
                  ,(error)=>{
            console.log('error:'+error)})
            .then((response) => 
                  response.json())
            .then((items) =>
                  {dispatch(itemsFetchDataSuccessContact(items));
                   dispatch(itemsIsLoadingContact(false));
                  }
                  ,(error)=>{console.log('error:'+error)});

    };
}