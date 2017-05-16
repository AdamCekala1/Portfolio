export function itemsFetchDataSuccessAboutMe(data) {
//    debugger;
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS_ABOUTME',
        data : data,
    };
}



export function itemsIsLoadingAboutMe(bool) {
    return {
        type: 'ITEMS_IS_LOADING_ABOUTME',
        isLoading: bool
    };
}


export function itemsFetchDataAboutMe(url,name) {
    return (dispatch) => {
        dispatch(itemsIsLoadingAboutMe(true));
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = url



        fetch(proxyUrl + targetUrl)
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
                  {dispatch(itemsFetchDataSuccessAboutMe(items));
                   dispatch(itemsIsLoadingAboutMe(false));
                  }
                  ,(error)=>{console.log('error:'+error)});

    };
}