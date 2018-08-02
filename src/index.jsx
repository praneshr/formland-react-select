import Select from './react-select'
import Creatable from './react-select-creatable'

const componentResolver = (type) => {
  switch (type) {
    case 'react-select':
      return Select
    case 'react-select-creatable':
      return Creatable
  }
}

const valueResolver = ({ type, componentProps }, ...rest) => {
  switch (type) {
    case 'react-select-creatable':
    case 'react-select':
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
