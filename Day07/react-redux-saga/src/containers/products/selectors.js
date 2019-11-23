/* eslint-disable react/no-typos */
import ListProducts from '../../components/ListProducts'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteProduct } from './actions'
import { productEditing } from '../productForm/actions'
import { addToCart } from '../carts/actions'

class ListProductsContainer extends Component {
  render() {
    let { products, onDeleteProduct, onEditingProduct, onAddToCart } = this.props

    return (
      <ListProducts
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditingProduct={onEditingProduct}
        onAddToCart={onAddToCart}
      />
    )
  }
}

ListProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quality: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onEditingProduct: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: (product) => dispatch(deleteProduct(product)),
    onEditingProduct: (product) => dispatch(productEditing(product)),
    onAddToCart: (cart) => dispatch(addToCart(cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProductsContainer)
