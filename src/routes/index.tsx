import {RouteConfig} from 'react-router-config'
import {Redirect} from 'react-router-dom'
// Import pages.
import Login from '../pages/Login'
import Layout from '../components/Layout'
import Homepage from '../pages/Homepage'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => (<Redirect to={'/login'}/>)
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/homepage',
        component: Homepage
      }
    ]
  }
]

export default routes
