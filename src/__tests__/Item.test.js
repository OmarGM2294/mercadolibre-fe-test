import React from 'react'

import { create } from 'react-test-renderer'

import Item from '../components/Item'

describe('Item', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Item data={{ 
      picture: '/imgs/search.svg',
      title: '',
      price: {
        amount: 0,
      },
      state_name: ''
    }}/>)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
