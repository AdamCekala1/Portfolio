import {combineReducers} from 'redux';
import skillsReducerDownload from './skillsReducer';
import skillsReducerShow from './skillsReducerShow';
import skillsReducerStyles from './skillsReducerStyles';

const rootReducer = combineReducers({
    skills:skillsReducerDownload,
    showed:skillsReducerShow,
    skillsStyles:skillsReducerStyles
});

export default rootReducer;