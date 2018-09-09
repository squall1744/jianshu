import * as actionTypes from './actionTypes'

export const searchFocus = () => {
  return {
    type: actionTypes.CHANGE_TO_FOCUS,
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.CHANGE_TO_BLUR,
  }
}