import React from 'react'
import Buttons from './Buttons'

describe('<Buttons />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Buttons />)
  })
})