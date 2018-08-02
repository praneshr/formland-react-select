import React, { Component } from 'react'
import { render } from 'react-dom'
import 'formland/css/index.css'

import Formland from 'formland/lib'
import { componentResolver, valueResolver } from '../../lib'

const config = [
  {
    id: 'one',
    type: 'text',
    displayName: 'test',
    resultPath: 'one.two',
  },
  {
    id: 'sel',
    type: 'react-select',
    displayName: 'test',
    resultPath: 'one.five',
    componentProps: {
      isMulti: true,
      options: [
        {
          value: '124453',
          label: '123',
        },
        {
          value: '124563',
          label: '12dfg3',
        },
        {
          value: '123453',
          label: '12dfbvcxb3',
        },
      ],
    },
  },
]


class Example extends Component {
  constructor() {
    super()
    this.state = {}
  }

  onChange = store => this.setState(store)

  render() {
    return (
      <div style={{
        maxWidth: 400,
        padding: 30,
      }}
      >
        <Formland
          config={config}
          customComponentResolvers={[componentResolver]}
          customValueResolvers={[valueResolver]}
          onChange={this.onChange}
          store={this.state}
        />
      </div>
    )
  }
}

render(
  <Example />,
  document.getElementById('app'),
)
