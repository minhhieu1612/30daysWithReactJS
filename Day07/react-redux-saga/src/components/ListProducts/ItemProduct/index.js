import React, { Component } from 'react'

class ItemProduct extends Component {
  // constructor(props) {
  //   super(props)
  // }
  onEdit = () => {
    let {
      product,
      onEditingProduct
    } = this.props

    onEditingProduct(product)
  }

  onDelete = () => {
    let { product, onDeleteProduct } = this.props
    onDeleteProduct(product)
  }


  onAddToCart = () => {
    let { product, onAddToCart } = this.props
    onAddToCart(product)
  }

  render() {
    let { index,
      product: {
        name,
        price,
        quality
      }
    } = this.props

    return (
      <li style={{ marginRight: '1rem', marginBottom: '1rem' }}>
        Item {index + 1}
        <ul>
          <li>
            name  -  {name}
          </li>
          <li>
            price  -  ${price}
          </li>
          <li>
            quality  -  {quality}
          </li>
          <li>
            <button onClick={this.onEdit} style={{ marginRight: '5px' }}>
              Edit
            </button>
            <button onClick={this.onAddToCart}>
              Add to cart
            </button>
          </li>
          <li>
            <button onClick={this.onDelete}>Delete</button>
          </li>
        </ul>

      </li>
    )
  }
}

export default ItemProduct
