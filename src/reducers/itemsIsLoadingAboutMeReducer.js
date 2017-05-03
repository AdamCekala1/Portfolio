
export default function itemsIsLoadingAboutMeReducer(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING_ABOUTME':
            return action.isLoading;

        default:
            return state;
    }
}