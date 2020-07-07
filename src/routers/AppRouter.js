import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import CardAPI from '../services/CardAPI';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact={true} path="/ChileTour" key="main-page">
                <CardAPI url='https://api.npoint.io/cef0bf8341dd206787a2' />
            </Route>
            <Route path="/ChileTour/SantiagoTours" key="tour-page">
                <CardAPI url="https://api.npoint.io/c1bd0d54cb63250a88db" />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;