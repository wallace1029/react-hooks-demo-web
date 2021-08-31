import * as actionTypes from './actionTypes'

const setUserInformation = (value: any) => ({
  type: actionTypes.SET_USER_INFORMATION,
  value
})

const deleteUserInformation = () => ({
  type: actionTypes.DELETE_USER_INFORMATION
})

export {
  setUserInformation,
  deleteUserInformation
}
