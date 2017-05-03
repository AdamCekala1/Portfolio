import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import styles from './css/styles.css';
import configStore from './store/configStore';
import Routes from './routes';
import {itemsFetchData} from './actions/skillsActions';
import {itemsFetchDataAboutMe} from './actions/aboutMeActions';
import {itemsFetchDataContact} from './actions/contactActions';

const store = configStore();
//store.dispatch(itemsFetchData("https://jsonplaceholder.typicode.com/users"))
store.dispatch(itemsFetchData("https://api.myjson.com/bins/nb9rl"))
store.dispatch(itemsFetchDataAboutMe("https://api.myjson.com/bins/1h7w95"))
store.dispatch(itemsFetchDataContact("https://api.myjson.com/bins/145mgx"))

render(
    <Provider store={store}>
        <Routes/>
    </Provider>
,
    document.getElementById('root')
);