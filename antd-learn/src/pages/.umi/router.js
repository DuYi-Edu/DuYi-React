import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'D:/repository/React/源码/antd-learn/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/carousel-test',
        exact: true,
        component: require('../carousel-test.js').default,
      },
      {
        path: '/cascade-test',
        exact: true,
        component: require('../cascade-test.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        Routes: [require('../../router/PrivateRouter').default],
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
      },
      {
        path: '/other',
        exact: true,
        component: require('../other.js').default,
      },
      {
        path: '/student/add',
        exact: true,
        component: require('../student/add.js').default,
        Routes: [require('../../router/PrivateRouter').default],
      },
      {
        path: '/student',
        exact: true,
        component: require('../student/index.js').default,
        Routes: [require('../../router/PrivateRouter').default],
      },
      {
        path: '/student/:id',
        exact: true,
        component: require('../student/$id.js').default,
        Routes: [require('../../router/PrivateRouter').default],
      },
      {
        path: '/upload-test',
        exact: true,
        component: require('../upload-test.js').default,
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
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
