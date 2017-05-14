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
store.dispatch(itemsFetchData("https://api.myjson.com/bins/idgu9"))
store.dispatch(itemsFetchDataAboutMe("https://api.myjson.com/bins/hpw2p"))
store.dispatch(itemsFetchDataContact("https://api.myjson.com/bins/16s8n5"))

render(
    <Provider store={store}>
        <Routes/>
    </Provider>
,
    document.getElementById('root')
);