import routesConfig from '../config/routes'

import HomePage from '../pages/Home/Home'
import TvPage from '../pages/TvPage/TvPage'
import DetailPage from '../pages/Detail/Detail'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import LoginPage from '../pages/Login/Login'
import FormLayout from '../component/FormLayout/FormLayout'

const publicRoutes = [
    { path: routesConfig.login, component: LoginPage, layout: FormLayout },
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.detail, component: DetailPage },
    { path: routesConfig.movies, component: MoviesPage },
    { path: routesConfig.tv, component: TvPage },
]

const privateRoutes = []


export { publicRoutes, privateRoutes }