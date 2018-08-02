import Select from './react-select'
import Async from './react-select-async'
import Creatable from './react-select-creatable'
import AsyncCreatable from './react-select-async-creatable'

const componentResolver = (type) => {
  switch (type) {
    case 'react-select':
      return Select
    case 'react-select-async':
      return Async
    case 'react-select-creatable':
      return Creatable
    case 'react-select-async-creatable':
      return AsyncCreatable
  }
}

const valueResolver = ({ type, componentProps }, ...rest) => {
  switch (type) {
    case 'react-select-async':
    case 'react-select':
    case 'react-select-creatable':
    case 'react-select-async-creatable':
      if (componentProps.isMulti) {
        return rest.filter(e => !!e.label)
      }
      return rest[0]
  }
}

export {
  componentResolver,
  valueResolver,
}
