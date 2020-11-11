import React from 'react'
import About from '.'
import renderer from 'react-test-renderer'

it('Component about testing', () => {
  const component = renderer.create(
    <About />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})