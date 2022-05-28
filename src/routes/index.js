// Layout
import { HeaderOnly } from '~/Component/Layouts';

import Home from '~/page/Home';
import Following from '~/page/Folowing';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
