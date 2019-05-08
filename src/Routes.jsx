import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Detail from './containers/Detail';
import NotFound from './containers/NotFound';

import Layout from './components/Layout';

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </Router>
);

export default Routes;