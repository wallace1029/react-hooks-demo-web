import './top-bar.scss'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../store/actions'
import logo from '../../assets/logo.svg'
import {Dropdown, Menu} from 'antd'
import {DownOutlined} from '@ant-design/icons'

const TopBar = ({history}: any) => {
  const dispatch = useDispatch()
  const userInformation = useSelector((state: any) => state.userInformation)

  const handleClick = ({key}: any) => {
    if (key === 'logout') {
      // Step-1: clear user information
      dispatch(actions.deleteUserInformation())
      // Step-2: logout
      history.push({pathname: '/login'})
    }
  }
  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key={'logout'}>Logout</Menu.Item>
    </Menu>
  )

  return (
    <div className={'top-bar'}>
      <div className={'left-container'}>
        <div className={'logo-box'}>
          <img src={logo} alt="Logo"/>
        </div>
        <div className={'title-box'}>
          <span>React Hooks Demo App</span>
        </div>
      </div>
      <div className={'right-container'}>
        <Dropdown
          overlay={menu}
          trigger={['click']}>
          <span className={'nickname'}>
            {userInformation.nickname}
            <DownOutlined style={{fontSize: '12px', verticalAlign: 'middle', marginLeft: '8px'}}/>
          </span>
        </Dropdown>
      </div>
    </div>
  )
}

export default TopBar
