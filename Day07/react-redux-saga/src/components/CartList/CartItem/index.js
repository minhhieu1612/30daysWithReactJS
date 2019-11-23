import React, { Component } from 'react'

class CartItem extends Component {
  onDeleteCart = () => {
    let { cart, onDeleteCart } = this.props
    onDeleteCart(cart)
  }

  onEditCartQuality = (increaseQuality) => {
    let { cart, onEditCartQuality } = this.props
    if (increaseQuality === 1 && cart.quality === cart.maxQuality) alert('Cannot get more product from stock')
    else if (increaseQuality === -1 && cart.quality === 1) this.onDeleteCart()
    else onEditCartQuality(cart, increaseQuality)
  }

  render() {
    let { index,
      cart: {
        name,
        price,
        quality
      }
    } = this.props

    return (
      <tr>
        <td style={{ width: '10%' }}>{index + 1}</td>
        <td style={{ width: '40%' }}>{name}</td>
        <td style={{ width: '30%' }}>
          <button
            style={{ marginRight: '10px' }}
            onClick={() => this.onEditCartQuality(-1)}
          > - </button>
          {quality}
          <button
            style={{ marginRight: '10px', marginLeft: '10px' }}
            onClick={() => this.onEditCartQuality(1)}
          > + </button>
        </td>
        <td style={{ width: '10%' }}>${price}</td>
        <td style={{ width: '10%' }}>
          <button
            type="button"
            onClick={this.onDeleteCart}
          >Delete</button>
        </td>
      </tr>
    )
  }
}

export default CartItem
