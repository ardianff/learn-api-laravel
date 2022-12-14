import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({ children, label, id }) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            {children}
        </div>
    )
}

FormControl.propTypes = {}

export default FormControl
