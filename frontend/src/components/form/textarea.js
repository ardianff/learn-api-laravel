import React from 'react'
import PropTypes from 'prop-types'

const Textarea = props => {
    return (
        <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...props}></textarea>
    )
}

Textarea.propTypes = {}

export default Textarea
