import React, { Component } from 'react'
import { render } from 'react-dom'
import 'formland/css/index.css'

import Formland from 'formland/lib'
import { componentResolver, valueResolver } from '../../lib'
import config from './form-config'

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
