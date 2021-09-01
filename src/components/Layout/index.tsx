import {renderRoutes} from 'react-router-config'
import TopBar from '../TopBar/TopBar'
import LeftNavigation from '../LeftNavigation'
import './layout.scss'

const Layout = (props: any) => {
  // Deconstruct props, get routes of current route.
  const routes = props.route.routes

  return (
    <div className={'layout'}>
      <div className={'top-bar-wrap'}>
        <TopBar {...props}/>
      </div>
      <div className={'body-wrap'}>
        <div className={'left-navigation-wrap'}>
          <LeftNavigation/>
        </div>
        <div className={'content-wrap'}>
          {renderRoutes(routes)}
        </div>
      </div>
    </div>
  )
}

export default Layout
