import React, { Component } from 'react'
import { ListProductsContainer } from '../../containers/products'
import { ProductForm } from '../../containers/productForm'
import { Switch } from 'react-router-dom'
// import ProductForm from '../../containers/productForm

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      permission: localStorage.getItem('isAdmin') === 'true'
    }
  }

  render() {
    let { permission } = this.state
    return (
      <div>
        {/* <Navigation /> */}
        <main>
          <Switch>
            <React.Fragment>
              {(permission && <ProductForm />)}

              <ListProductsContainer />
            </React.Fragment>
          </Switch>
        </main>
      </div>
    )
  }
}

export default Content
