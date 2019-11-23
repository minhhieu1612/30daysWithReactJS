import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

class ListProducts extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let { products, onDeleteProduct, onEditingProduct, onAddToCart } = this.props

    let listItem = products.map((product, index) =>
      <ItemProduct
        key={product.id}
        product={product}
        index={index}
        onDeleteProduct={onDeleteProduct}
        onEditingProduct={onEditingProduct}
        onAddToCart={onAddToCart}
      />
    )
    return (
      <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
        {listItem}
      </div>
    )
  }
}

export default ListProducts
