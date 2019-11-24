import types from './types'
const initialState = false

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    // eslint-disable-next-line no-lone-blocks
    case types.LOADING: state = true
      break
    case types.UNLOAD: state = false
      break
    default:
  }

  return state
}

export default rootReducer
