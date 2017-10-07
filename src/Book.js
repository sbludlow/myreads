import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component
{
	static propTypes = {
		addToList: PropTypes.func.isRequired,
		shelf : PropTypes.string
	}

	render(){
		const {book, shelf} = this.props
		const authorString = book.authors ? book.authors.join(', ') : ''

		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select defaultValue={shelf} onChange={(event) => this.props.addToList(book, event.target.value)} title="Move to Shelf">
								<option value="na" disabled >Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
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
	}
}

export default Book