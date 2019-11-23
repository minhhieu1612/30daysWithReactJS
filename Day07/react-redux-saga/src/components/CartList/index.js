import React, { Component } from 'react'
import CartItem from './CartItem';

class CartList extends Component {

  render() {
    let { carts, onEditCartQuality, onDeleteCart } = this.props
    let listProducts = carts.map((cart, index) =>
      <CartItem
        key={cart.id}
        index={index}
        cart={cart}
        onEditCartQuality={onEditCartQuality}
        onDeleteCart={onDeleteCart}
      />
    )

    let totalQuality = carts.reduce((total, cart) => total + cart.quality, 0)
    let totalPrice = carts.reduce((total, cart) => total + cart.quality * cart.price, 0).toFixed(2)

    return (
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ fontWeight: 'bold' }}>
            <th style={{ width: '10%' }}>.Num</th>
            <th style={{ width: '40%' }}>Product Name</th>
            <th style={{ width: '30%' }}>Quality</th>
            <th style={{ width: '10%' }}>Money</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {listProducts}
          <tr>
            <td style={{ fontWeight: 'bold' }}>Total</td>
            <td></td>
            <td>{totalQuality}</td>
            <td>${totalPrice}</td>
            <td></td>
          </tr>
        </tbody>
      </table >
    )
  }
}

export default CartList
