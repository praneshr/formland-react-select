import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CreatableSelect from 'react-select/lib/Creatable'

export default class ReactSelectCreatable extends PureComponent {
  render() {
    const {
      value,
      config,
      callbacks,
    } = this.props
    return (
      <div>
        <CreatableSelect
          value={value}
          {...config.componentProps}
          {...callbacks}
        />
      </div>
    )
  }
}

ReactSelectCreatable.propTypes = {
  value: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  config: PropTypes.shape().isRequired,
  callbacks: PropTypes.shape().isRequired,
}
