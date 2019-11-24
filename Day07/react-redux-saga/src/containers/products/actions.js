import types from './types'

const createProduct = (product) => ({
  type: types.CREATE_PRODUCT,
  product
})

const editProduct = (product) => ({
  type: types.EDIT_PRODUCT,
  product
})

const deleteProduct = (product) => ({
  type: types.DELETE_PRODUCT,
  product
})

const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product
})

const fetchRequest = () => ({
  type: types.FETCH_REQUEST
})

const fetchSuccess = (products) => ({
  type: types.FETCH_SUCCESS,
  products
})

const fetchFailure = (message) => ({
  type: types.FETCH_FAILURE,
  message
})

export {
  createProduct,
  editProduct,
  deleteProduct,
  addToCart,
  fetchRequest,
  fetchSuccess,
  fetchFailure,
}