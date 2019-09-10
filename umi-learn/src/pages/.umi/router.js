import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        title: '首页',
        Routes: [require('../../routes/HandleTitle.js').default],
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
        title: '登录页',
        Routes: [require('../../routes/HandleTitle.js').default],
      },
      {
        path: '/welcome',
        exact: true,
        component: require('../welcome.js').default,
        title: '欢迎页',
        Routes: [
          require('../../routes/PrivateRouter.js').default,
          require('../../routes/HandleTitle.js').default,
        ],
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/kevin/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/kevin/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
