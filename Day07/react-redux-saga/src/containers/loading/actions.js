import types from './types'

const loading = () => ({
  type: types.LOADING
})

const unload = () => ({
  type: types.UNLOAD
})

export {
  loading,
  unload,
}