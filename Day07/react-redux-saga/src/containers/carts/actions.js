import types from './types'

const addToCart = (cart) => ({
  type: types.ADD_TO_CART,
  cart
})

const editCartQuality = (cart, increaseQuality) => ({
  type: types.EDIT_CART_QUALITY,
  cart,
  increaseQuality
})

const deleteCart = (cart) => ({
  type: types.DELETE_CART,
  cart
})

export {
  addToCart,
  editCartQuality,
  deleteCart,
}