import React from 'react'

import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'

import Items from '../containers/Items'
import Item from '../components/Item'

const data = [
  { 
    picture: '/imgs/search.svg',
    title: '',
    price: {
      amount: 0,
    },
    state_name: ''
  },
  { 
    picture: '/imgs/search.svg',
    title: '',
    price: {
      amount: 0,
    },
    state_name: ''
  }
]

describe('Items', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Items data={data} />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Should show cards', () => {
    const component = shallow(<Items data={data} />)

    expect(component.find(Item).length).toEqual(2)
  })

  it('Should show an empty state when there is no cards', () => {
    const component = shallow(<Items data={[]} />)

    expect(component.find(Item).length).toEqual(0)
  })
})
