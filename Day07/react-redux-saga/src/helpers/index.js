export const findIndex = (id, arr) => {
  let result = -1
  if (Array.isArray(arr)) {
    arr.forEach((el, index) => {
      if (el.id === id) result = index
    })
  }
  return result
}

export const setProductsStorage = (products) => localStorage.setItem('products', JSON.stringify(products))

export const getProductsStorage = JSON.parse(localStorage.getItem('products'))

export const setCartsStorage = (carts) => localStorage.setItem('carts', JSON.stringify(carts))

export const getCartsStorage = JSON.parse(localStorage.getItem('carts'))

export const genId = () => {
  return parseInt(Math.random().toString(10).substr(2, 12))
}