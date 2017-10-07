import React from 'react'
import PropTypes from 'prop-types'
import {BOOKSHELVES} from '../util/Constants'

/**
 * Represents a single book
 * @param addToShelf callback for when a user wants to move a book
 * @param book the book data
 * @param shelf current book shelf
 * @returns {XML}
 * @constructor
 */
const Book = ({addToShelf, book, shelf}) =>
{
	Book.propTypes = {
		addToShelf: PropTypes.func.isRequired,
		shelf : PropTypes.string,
		book : PropTypes.object.isRequired
	};

	const authorString = book.authors ? book.authors.join(', ') : '';

	return(
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}/>
					<div className="book-shelf-changer">
						<select defaultValue={shelf} onChange={(event) => addToShelf(book, event.target.value)} title="Move to Shelf">
							<option value="na" disabled >Move to...</option>
							{
								BOOKSHELVES.map((bookshelf, index) =>
									<option key={index} value={bookshelf.shelf}>{bookshelf.title}</option>
								)
							}
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">
					{authorString}
				</div>
			</div>
		</li>
	)
};

export default Book