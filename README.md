# Formland React Select
[`react-select`](https://react-select.com/home) components for [`formland`](https://github.com/indix/formland)

## Install
```bash
yarn install formland-react-select react-select

# or

npm i formland-react-select react-select
```

## Usage
``` javascript
import React, { Component } from 'react'
import { render } from 'react-dom'
import Formland from 'formland'
import {
  componentResolver as reactSelectComponentResolvers,
  valueResolver as reactSelectValueResolvers,
  } from 'formland-react-select'


const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
]

const config = [
  {
    id: 'simple',
    type: 'react-select', // check 'type' section under options for more possible values
    displayName: 'Simple Dropdown',
    resultPath: 'simple',
    componentProps: {
      options: colourOptions, // check 'props' section under options to understand how to pass custom values
    },
  },
  {
    id: 'simple-multi',
    type: 'react-select',
    displayName: 'Simple Dropdown(Multi)',
    resultPath: 'simpleMulti',
    componentProps: {
      isMulti: true,
      options: colourOptions,
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
    return (<Formland
        config={config}
        customComponentResolvers={[reactSelectComponentResolvers]}
        customValueResolvers={[reactSelectValueResolvers]}
        onChange={this.onChange}
        store={this.state}
      />
    )
  }
}
```


## Options

#### Type
| Component | Formland Type|
|-----------|--------------|
|[React Select](https://react-select.com/home#welcome)| `react-select`|
|[React Select Creatable](https://react-select.com/creatable)| `react-select-creatable`|
|[React Select Async](https://react-select.com/async)| `react-select-async`|
|[React Select Async Creatable](https://react-select.com/async)| `react-select-async-creatable`|

#### Props

Props to `react-select` can be passed through `componentProps` property of formland config. For example, to enable multi select dropdown, pass `isMulti: true` in `componentProps`. You can see the list of react-select props [here](https://react-select.com/props)
```javascript
[
  {
    id: 'async-creatable-multi',
    type: 'react-select-async-creatable',
    displayName: 'Async Dropdown Creatable(Multi)',
    resultPath: 'asyncCreatableMulti',
    componentProps: {
      isMulti: true,
      loadOptions: input => new Promise((resolve) => {
        setTimeout(() => {
          resolve(colourOptions.filter(e => e.label.toLowerCase().includes(input)));
        }, 500);
      }),
    },
  },
]
```

## License
MIT
