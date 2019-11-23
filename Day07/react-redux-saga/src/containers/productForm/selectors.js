import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { productEditing } from './actions'
import { createProduct, editProduct } from '../products/actions'
import {clearProductEditing} from './actions'
import PropTypes from 'prop-types'
import { genId } from '../../helpers'

class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      price: 0,
      quality: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    let { productEditing } = props

    if (productEditing && productEditing.id && state.id !== productEditing.id) {
      return productEditing
    }

    return state
  }

  handleChange = e => {
    let target = e.target
    let name = target.name.replace('ip-', '')
    let value = target.value

    value = (target.type === 'number') ? Number(value) : value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let { onAddProduct, onEditedProduct, clearProductEditing } = this.props
    let { id } = this.state
    
    if (id) {
      onEditedProduct({ ...this.state })
    } else {
      onAddProduct({
        ...this.state,
        id: genId()
      })
    }
    clearProductEditing()
    this.clearForm()
  }

  handleReset = e => {
    this.setState({
      id: 0,
      name: '',
      price: 0,
      quality: 0
    })
  }

  clearForm = () => {
    this.setState({
        id: 0,
      name: '',
      price: 0,
      quality: 0
    })
  }

  render() {

    let { name, price, quality } = this.state

    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <h3>Add product</h3>
        <input
          type="text"
          placeholder="type product name"
          style={{ marginRight: '1rem' }}
          name="ip-name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="type price"
          style={{ marginRight: '1rem' }}
          step={0.1}
          min={0}
          name="ip-price"
          value={price}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="type product quality"
          style={{ marginRight: '1rem' }}
          min={0}
          name="ip-quality"
          value={quality}
          onChange={this.handleChange}
        />
        <button type="submit" style={{ marginRight: '1rem' }}>save</button>
        <button type="reset" style={{ marginRight: '1rem' }}>reset</button>
        <hr></hr>
      </form>
    )
  }
}

ProductForm.propTypes = {
  productEditing: PropTypes.object.isRequired,
  onEditedProduct: PropTypes.func.isRequired,
  onAddProduct: PropTypes.func.isRequired,
  clearProductEditing: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    productEditing: state.productEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditedProduct: (product) => dispatch(editProduct(product)),
    onAddProduct: (product) => dispatch(createProduct(product)),
    clearProductEditing: (product) => dispatch(clearProductEditing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
