import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Test1 from './routes/Test1';
import Test2 from './routes/Test2';
import Test3 from './routes/Test3';
import Test4 from './routes/Test4';
import { Provider } from "mobx-react";
import stores from './store';
const {
    globalStore,
    testStore
} = stores;

function RouterConfig({ history }) {
  return (
    <Provider myStore={{ globalStore, testStore }}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test1" exact component={Test1} />
        <Route path="/test2" exact component={Test2} />
        <Route path="/test3" exact component={Test3} />
        <Route path="/test4" exact component={Test4} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default RouterConfig;
