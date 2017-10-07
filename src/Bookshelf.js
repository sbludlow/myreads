import React , {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component
{
	static propTypes = {
		getShelf:PropTypes.func.isRequired,
		bookshelfTitle: PropTypes.string.isRequired,
		books: PropTypes.array
	}

	render(){
		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books && this.props.books.map((book) => (
								<Book book={book} shelf={this.props.getShelf(book)} key={book.id} addToList={this.props.addToList}/>
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default Bookshelf