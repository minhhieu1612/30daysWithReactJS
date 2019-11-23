import types from './types'
import { findIndex } from '../../helpers'
import products from '../../fakeData/products.json'
import { setProductsStorage, getProductsStorage } from '../../helpers'
const productsStorage = getProductsStorage
const initialState = productsStorage || products

const myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.CREATE_PRODUCT: {
      let product = actions.product
      state.push(product)
      setProductsStorage(state)
    } break
    case types.EDIT_PRODUCT: {
      let product = actions.product
      let index = findIndex(product.id, state)
      if (index > -1) state.splice(index, 1, product)
      setProductsStorage(state)
    } break
    case types.DELETE_PRODUCT: {
      let product = actions.product
      let index = findIndex(product.id, state)
      if (index > -1) state.splice(index, 1)
      setProductsStorage(state)
    } break
    default:
  }

  return [...state]
}

export default myReducer
