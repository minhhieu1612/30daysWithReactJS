import types from './types'
import { findIndex, getCartsStorage, setCartsStorage } from '../../helpers'

const initialState = getCartsStorage || []

const myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.ADD_TO_CART: {

      let { id, name, price, quality } = actions.cart
      let cart;
      let index = findIndex(id, state)
      if (index > -1) {
        cart = state[index]
        cart.quality = cart.quality + 1
      } else {
        cart = {
          id,
          name,
          price,
          quality: 1,
          maxQuality: quality
        }

        state.push(cart)
      }
      setCartsStorage(state)
    } break
    case types.EDIT_CART_QUALITY: {
      let { id, name, price, quality, maxQuality } = actions.cart
      let cart = {
        id: id,
        name: name,
        price: price,
        quality: quality + actions.increaseQuality,
        maxQuality,
      }
      let index = findIndex(cart.id, state)
      if (index > -1) state.splice(index, 1, cart)
      setCartsStorage(state)
    } break
    case types.DELETE_CART: {
      let cart = actions.cart
      let index = findIndex(cart.id, state)

      if (index > -1) state.splice(index, 1)
      setCartsStorage(state)
    } break
    default:
  }

  return [...state]
}

export default myReducer
