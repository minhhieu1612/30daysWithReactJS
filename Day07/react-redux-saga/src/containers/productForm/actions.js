import { types } from "./types"

const productEditing = (product) => ({
  type: types.PRODUCT_EDITING,
  product
})

const clearProductEditing = () => ({
  type: types.CLEAR_PRODUCT_EDITING
})

export {
  productEditing,
  clearProductEditing
}