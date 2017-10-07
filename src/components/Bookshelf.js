import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'
import {DISPLAY_BOOKSHELVES} from '../util/Constants'

/**
 * Page where a user can see their individual bookshelves
 * @param books All books (unsorted) on the bookshelf
 * @param addToShelf callback for choosing a book to move to a shelf
 * @returns {XML}
 * @constructor
 */
const Bookshelf = ({books, addToShelf}) =>
{
	Bookshelf.propTypes = {
		books: PropTypes.array,
		addToShelf: PropTypes.func.isRequired
	};

	return(
		<div className="list-books">
			<div className="list-books-title">
				<h1>My Diggity Diggity Reads</h1>
			</div>
			<div className="list-books-content">
				<div>{
					DISPLAY_BOOKSHELVES.map((bookshelf, index) =>
						<Shelf key={index} bookshelfTitle={bookshelf.title} books={books.filter((book) => book.shelf === bookshelf.shelf)} addToShelf={addToShelf}/>
					)
				}
				</div>
			</div>
			<div className="open-search">
				<Link to='/search' title="Add a book">Add a book</Link>
			</div>
		</div>
	)
};

export default Bookshelf