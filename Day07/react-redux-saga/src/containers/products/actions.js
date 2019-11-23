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

export {
  createProduct,
  editProduct,
  deleteProduct,
  addToCart,
}