import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Routes from './Routes';
import Fooder from '../components/Fooder';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Routes />
        </Switch>
        <Fooder />
    </BrowserRouter>
);

export default AppRouter;