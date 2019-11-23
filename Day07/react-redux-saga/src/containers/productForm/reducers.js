import { types } from './types'
const initialState = null
const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.PRODUCT_EDITING: {
      let { id, name, price, quality } = actions.product
      let product = {
        id: id,
        name: name,
        price: price,
        quality: quality
      }

      state = product
    } break

    case types.CLEAR_PRODUCT_EDITING: state = null
      break

    default:
  }

  return { ...state }
}

export default rootReducer