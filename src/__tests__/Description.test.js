import React from 'react'

import { create } from 'react-test-renderer'

import Description from '../components/Description'

describe('Description', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Description data={{
      id: 'MLA903779920',
      title: 'Vestido Holi- Modelo Johnny Cash- Ladrillo- Talle 1',
      price: { currency: 'ARS', amount: 5999, decimals: 10 },
      picture: '/imgs/search.svg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 0,
      description: 'Vestido Holi\nModelo Johnny Cash\nColor ladrillo\nTalle 1'
    }}/>)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
