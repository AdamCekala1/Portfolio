import {combineReducers} from 'redux';
import skillsReducerDownload from './skillsReducer';
import skillsReducerShow from './skillsReducerShow';
import skillsReducerStyles from './skillsReducerStyles';
import aboutMeReducer from './aboutMeReducer';
import contactReducer from './contactReducer';
import itemsIsLoadingAboutMeReducer from './itemsIsLoadingAboutMeReducer';
import skillsLoadingReducer from './skillsLoadingReducer';

const rootReducer = combineReducers({
    contactData:contactReducer,
    skillsLoading:skillsLoadingReducer,
    itemsIsLoadingAboutMe:itemsIsLoadingAboutMeReducer,
    aboutMe:aboutMeReducer,
    skills:skillsReducerDownload,
    showed:skillsReducerShow,
    skillsStyles:skillsReducerStyles
});

export default rootReducer;