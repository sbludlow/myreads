import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 * Represents a single shelf containing a number 0+ of books
 * @param bookshelfTitle name of the shelf
 * @param addToShelf callback for when a user wants to move a book
 * @param books array of books on the shelf
 * @returns {XML}
 * @constructor
 */
const Bookshelf = ({bookshelfTitle, addToShelf, books}) =>
{
	Bookshelf.propTypes = {
		bookshelfTitle: PropTypes.string.isRequired,
		addToShelf : PropTypes.func.isRequired,
		books: PropTypes.array
	};

	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{bookshelfTitle}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						books.length > 0
						?
							(
								books.map((book) => (
									<Book book={book} shelf={book.shelf} key={book.id} addToShelf={addToShelf}/>
								))
							)
						:
						"You have no books on this shelf"
					}
				</ol>
			</div>
		</div>
	)
};

export default Bookshelf