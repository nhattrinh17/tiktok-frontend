import routeConfig from '~/config/routes';

// Layout
import { HeaderOnly } from '~/Component/Layouts';

import Home from '~/page/Home';
import Following from '~/page/Folowing';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

const publicRoutes = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.frofile,
        component: Profile,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
