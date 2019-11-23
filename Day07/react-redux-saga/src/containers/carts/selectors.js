/* eslint-disable react/no-typos */
import CartList from '../../components/CartList'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editCartQuality, deleteCart } from './actions'

class CartListContainer extends Component {
  render() {
    let { carts, onEditCartQuality, onDeleteCart } = this.props
    return (
      <CartList
        carts={carts}
        onEditCartQuality={onEditCartQuality}
        onDeleteCart={onDeleteCart}
      />
    )
  }
}

CartListContainer.propTypes = {
  carts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quality: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onEditCartQuality: PropTypes.func.isRequired,
  onDeleteCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => {

  return {
    carts: state.carts
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditCartQuality: (cart, increaseQuality) => dispatch(editCartQuality(cart, increaseQuality)),
    onDeleteCart: (cart) => dispatch(deleteCart(cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer)
