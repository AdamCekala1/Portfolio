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
store.dispatch(itemsFetchData("https://ac-api.herokuapp.com/API/knowledge/?format=json"))
store.dispatch(itemsFetchDataAboutMe("https://ac-api.herokuapp.com/API/?format=json"))
store.dispatch(itemsFetchDataContact("https://ac-api.herokuapp.com/API/contact/?format=json"))

render(
    <Provider store={store}>
        <Routes/>
    </Provider>
,
    document.getElementById('root')
);