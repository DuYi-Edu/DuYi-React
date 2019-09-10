import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/counter',
        exact: true,
        component: require('../counter.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        title: '首页',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '首页',
        _title_default: true,
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
        title: '登录页',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '登录页',
        _title_default: true,
      },
      {
        path: '/sub/a',
        exact: true,
        component: require('../sub/a.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/sub/sub/b',
        exact: true,
        component: require('../sub/sub/b.js').default,
        _title: true,
        _title_default: true,
      },
      {
        path: '/welcome',
        exact: true,
        component: require('../welcome.js').default,
        title: '欢迎页',
        Routes: [
          require('../../routes/PrivateRouter.js').default,
          require('./TitleWrapper.jsx').default,
        ],
        _title: '欢迎页',
        _title_default: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/kevin/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: true,
        _title_default: true,
      },
    ],
    _title: true,
    _title_default: true,
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/kevin/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: true,
    _title_default: true,
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
