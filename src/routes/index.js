import Search from '../containers/search';
import Home from '../containers/home';
import Artist from '../containers/artist';

const routes = [{
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/artist",
        component: Artist
    },
    {
        path: "/search",
        component: Search
    }
];

export default routes;