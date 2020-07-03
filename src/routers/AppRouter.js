import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Santiago from '../components/Santiago';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Header />
                <Route path="/" exact>
                    <Santiago />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;