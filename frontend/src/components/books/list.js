import React from 'react'
import PropTypes from 'prop-types'
import { FormatRupiah } from '@arismun/format-rupiah'

const BookList = ({ books = [] }) => {
    var numb = 1
    const Item = ({ children }) => {
        return (
            <div className="w-full border-gray-300 border-2 px-5 py-5 mb-2 rounded-lg">
                {children}
            </div>
        )
    }
    return books.map(book => (
        <Item key={book.id}>
            {numb++}. {book.name} - <FormatRupiah value={book.base_price} />
        </Item>
    ))
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookList
