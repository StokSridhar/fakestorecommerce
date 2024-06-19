import React from 'react'
import Page from './ProductList'

describe('<Page />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Page />)
  })
})