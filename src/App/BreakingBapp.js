import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NotFound from './components/Errors/NotFound';
import Loader from './components/Loader/Loader';

const CharacterListPage = lazy(() => import('./components/Character/List/CharacterListPage'));
const CharacterDetailPage = lazy(() => import('./components/Character/Detail/CharacterDetailPage'));

const BreakingBapp = () => {
  return (
    <>
      <CssBaseline />
      <div id="app">
        <Router>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={CharacterListPage} />
              <Route exact path="/character/:id" component={CharacterDetailPage} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default BreakingBapp;
