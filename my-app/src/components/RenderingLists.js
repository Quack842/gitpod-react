import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'To Kill a Mocking Bird',
        'The Great Gatsby',
        'The Cather in the Rye'
    ]

    const book = [
        {
            title: 'To Kill a Mocking Bird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'The Cather in the Rye',
            author: 'J. D. Saligner',
            pages: 234
        }
    ]
  return (
    <div>
        {bookList.map(bookDetails => {
            return <h2 key={bookDetails} >{bookDetails}</h2>
        })}
        <hr />
        {
            book.map(bookDetails => {
                return <Book key={bookDetails.title} bookDetails={bookDetails} />
            })
        }
    </div>
  )
}

export default RenderingLists