export default function skillsLoadingReducer(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING_SKILLS':
            return action.isLoading;

        default:
            return state;
    }
}