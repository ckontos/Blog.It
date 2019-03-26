import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import Create from '../components/Create';
import EditEntry from '../components/Edit';
import PublishedEntry from '../components/Published';
import LoginPage from '../components/Login';
import RegisterPage from '../components/Register';
import NotFound from '../components/Error';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <PublicRoute path='/' component={ LoginPage } exact = {true} />
                <PublicRoute path='/register' component={ RegisterPage } />
                <PublicRoute path='/dashboard' component={ Dashboard } />
                <PublicRoute path='/create' component={ Create } />
                <PublicRoute path='/edit/:id' component={ EditEntry } />
                <PublicRoute path='/view/:id' component={ PublishedEntry } />
                <PublicRoute path='/login' component={ LoginPage } />
                <PublicRoute path='/register' component={ RegisterPage } />
                {/* <PrivateRoute path='/dashboard' component={ DashboardPage } /> */}
                <Route component={ NotFound } />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;