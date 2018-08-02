import React, { PureComponent } from 'react'
import AsyncSelect from 'react-select/lib/Async'
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
        <AsyncSelect
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
