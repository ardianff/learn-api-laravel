import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder, id, type = 'text', name, onChange }) => {
    return (
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
        />
    )
}

Input.propTypes = {}

export default Input
