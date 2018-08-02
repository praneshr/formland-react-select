import React, { PureComponent } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

export default class ReactSelect extends PureComponent {
  render() {
    const {
      value,
      config,
      callbacks,
    } = this.props
    return (
      <div>
        <Select
          classNamePrefix="react-select"
          value={value}
          {...config.componentProps}
          {...callbacks}
        />
      </div>
    )
  }
}

ReactSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  config: PropTypes.shape().isRequired,
  callbacks: PropTypes.shape().isRequired,
}
