import {useRef} from 'react'
import {useDispatch} from 'react-redux'
import * as actions from '../../store/actions'
import {Button, Card, Form, Input} from 'antd'
import './login.scss'

const Login = (props: any) => {
  const dispatch = useDispatch()
  const formRef = useRef() as any
  // Commit form.
  const handleCommit = (values: any) => {
    const {username, password} = values
    if (username === 'admin' && password === 'admin') {
      // Step-1: save user mock information to store.
      const userInformation = {
        id: 1,
        nickname: 'Super Administrator'
      }
      dispatch(actions.setUserInformation(userInformation))
      // Step-2: jump to homepage.
      props.history.push({pathname: '/homepage'})
    }
  }
  // Reset form
  const resetForm = () => {
    formRef.current.resetFields()
  }

  return (
    <div className={'login'}>
      <Card
        title={'Login'}
        className={'card'}>
        <Form
          ref={formRef}
          initialValues={{ username: 'admin', password: 'admin'}}
          labelCol={{span: 6}}
          wrapperCol={{span: 18}}
          onFinish={handleCommit}>
          <Form.Item
            label={'Username'}
            name={'username'}
            rules={[{required: true, message: 'Username field can not be empty.'}]}>
            <Input/>
          </Form.Item>
          <Form.Item
            label={'Password'}
            name={'password'}
            rules={[{required: true, message: 'Password field can not be empty.'}]}>
            <Input.Password/>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 6, span: 18}}>
            <Button
              htmlType={'submit'}
              type={'primary'}
              style={{marginRight: '16px'}}>Login</Button>
            <Button onClick={resetForm}>Reset</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
