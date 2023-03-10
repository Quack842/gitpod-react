import React from 'react'

function Book(props) {
    const bookDetails = props.bookDetails
  return (
        <div>
            <h5>{bookDetails.title}</h5>
            <p>{bookDetails.author}</p>
            <p>{bookDetails.pages}</p>
            <hr />
        </div>
  )
}

export default Book