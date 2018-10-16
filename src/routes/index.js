import React from 'react';
import Loadable from 'react-loadable';

const routes = [{
        path: "/",
        component: Loadable({
            loader: () => import('../containers/home'),
            loading: () => <div>Loading...</div>,
            render: ( Component, props ) => <Component.default { ...props } />
        }),
        exact: true
    },
    {
        path: "/artist",
        component: Loadable({
            loader: () => import('../containers/artist'),
            loading: () => <div>Loading...</div>,
            render: ( Component, props ) => <Component.default { ...props } />
        })
    },
    {
        path: "/search",
        component: Loadable({
            loader: () => import('../containers/search'),
            loading: () => <div>Loading...</div>,
            render: ( Component, props ) => <Component.default { ...props } />
        })
    }
];

export default routes;