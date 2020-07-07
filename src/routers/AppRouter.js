import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import CardAPI from '../services/CardAPI';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact={true} path="/ChileTour" key="Santiago">
                <CardAPI url='https://api.npoint.io/cef0bf8341dd206787a2' />
            </Route>
            <Route path="/ChileTour/SantiagoTours" key="SantiagoTours">
                <CardAPI url="https://api.npoint.io/c1bd0d54cb63250a88db" />
            </Route>
            <Route path="/ChileTour/ValleMaipo" key="ValleMaipo">
                <CardAPI url="https://api.npoint.io/f5949de330819643a857" />
            </Route>
            <Route path="/ChileTour/ValleCasablanca" key="ValleCasablanca">
                <CardAPI url="https://api.npoint.io/0435b0b7acec2e2840ef" />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;