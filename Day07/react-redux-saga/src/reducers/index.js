import { combineReducers } from 'redux'
import { reducers as products } from '../containers/products'
import { reducers as productEditing } from '../containers/productForm'
import { reducers as carts } from '../containers/carts'

export const rootReducer = combineReducers({
  products,
  productEditing,
  carts,
})
