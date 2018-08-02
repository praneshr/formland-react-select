import React, { PureComponent } from 'react'
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable'
import PropTypes from 'prop-types'

export default class ReactSelectAsync extends PureComponent {
  render() {
    const {
      value,
      config,
      callbacks,
    } = this.props
    return (
      <div>
        <AsyncCreatableSelect
          classNamePrefix="react-select"
          value={value}
          {...config.componentProps}
          {...callbacks}
        />
      </div>
    )
  }
}

ReactSelectAsync.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  config: PropTypes.shape().isRequired,
  callbacks: PropTypes.shape().isRequired,
}
