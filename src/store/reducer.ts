import * as lodash from 'lodash'
import * as actionTypes from './actionTypes'

const defaultState = {
  userInformation: {
    id: null,
    nickname: ''
  }
}

const reducer = (state: any = defaultState, action: any): any => {
  const newState = lodash.cloneDeep(state)
  const {type, value} = action
  switch (type) {
    case actionTypes.SET_USER_INFORMATION:
      return {...newState, userInformation: value}
    case actionTypes.DELETE_USER_INFORMATION:
      const userInformation = {
        id: null,
        nickname: ''
      }
      return {...newState, userInformation}
    default:
      return state
  }
}

export default reducer
