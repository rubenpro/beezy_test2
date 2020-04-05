import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NotFound from './components/Errors/NotFound';
import Loader from './components/Loader/Loader';

const CharacterList = lazy(() => import('./components/Character/List/CharacterList'));
const CharacterDetail = lazy(() => import('./components/Character/Detail/CharacterDetail'));

const BreakingBapp = () => {
  return (
    <>
      <CssBaseline />
      <div id="app">
        <Router>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={CharacterList} />
              <Route exact path="/character/:id" component={CharacterDetail} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default BreakingBapp;
