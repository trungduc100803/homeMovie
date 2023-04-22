import routesConfig from '../config/routes'

import HomePage from '../pages/Home/Home'
import TvPage from '../pages/TvPage/TvPage'
import DetailPage from '../pages/Detail/Detail'
import MoviesPage from '../pages/MoviesPage/MoviesPage'

const publicRoutes = [
    {path: routesConfig.home, component:HomePage },
    {path: routesConfig.detail, component: DetailPage},
    {path: routesConfig.movies, component: MoviesPage},
    {path: routesConfig.tv, component: TvPage},
]

const privateRoutes = []


export  {publicRoutes, privateRoutes}