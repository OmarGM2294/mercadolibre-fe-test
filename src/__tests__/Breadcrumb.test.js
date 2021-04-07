import React from 'react'

import { create } from 'react-test-renderer'

import Breadcrumb from '../components/Breadcrumb'

describe('Breadcrumb', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Breadcrumb data={[]}/>)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})