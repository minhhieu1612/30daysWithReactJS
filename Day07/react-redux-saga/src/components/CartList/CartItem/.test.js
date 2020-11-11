// import jest from 'jest'
import React from 'react'
import CartItem from '.'
import renderer from 'react-test-renderer'
import products from '../../../fakeData/products.json'

const myMock = jest.fn()

it('testing CartItem component', () => {
  let { id, name, price, quality } = products[0]
  let cart = {
    id, name, price,
    quality: 1,
    maxQuality: quality
  }
  const component = renderer.create(
    <CartItem key={id} index={0} cart={cart} />
  )

  // check on render
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger delete cart
  // tree.props.onDeleteCart
  // const onDeleteCart = myMock.bind(tree.props.onDeleteCart)
  // onDeleteCart()
  // console.log(myMock.mock)
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()

  // manually trgigger edit cart quality
  // console.log();
  // tree.children[2].children[2].props.onClick(1)

  // // const onEditCartQuality = myMock.bind(tree.props.onEditCartQuality)
  // // onEditCartQuality(1)
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
});