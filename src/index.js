import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import styles from './css/styles.css';
import configStore from './store/configStore';
import Routes from './routes';
import {itemsFetchData} from './actions/skillsActions';

const store = configStore();
store.dispatch(itemsFetchData("https://jsonplaceholder.typicode.com/users"))

render(
    <Provider store={store}>
        <Routes/>
    </Provider>
,
    document.getElementById('root')
);