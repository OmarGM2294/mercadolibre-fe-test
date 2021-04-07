import React from 'react'

import { create } from 'react-test-renderer'

import NavBar from '../components/NavBar'

describe('NavBar', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<NavBar />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})