import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import Book from './Book'
import {NONE} from '../util/Constants'

/**
 * Represents the page where a user can search for possible books to add to their shelf
 */
class SearchBooks extends Component
{
	static propTypes = {
		addToShelf: PropTypes.func.isRequired,
		books : PropTypes.array.isRequired
	};

	state = {
		query : '',
		searchResults : []
	};

	/**
	 * called on load of component. Used mainly to apply focus to search
	 */
	componentDidMount(){
		this.searchInput.focus();
	};

	getShelf = (searchResult) =>{
		const book = this.props.books.filter((myBook) => myBook.id === searchResult.id);
		return book.length > 0 ? book[0].shelf : NONE.shelf;
	};

	searchBooks = (query) => {
		this.setState({
			query : query.trim()
		});

		BooksAPI.search(query, 10).then(searchResults => {
			const results = (!searchResults || searchResults.error) ? [] : searchResults;
			this.setState({
				searchResults : results,
			})
		})
	};

	render(){
		const {query, searchResults} = this.state;

		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link className='close-search' to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" value={query} onChange={(event) => {
							this.searchBooks(event.target.value)
						}} ref={(input) => { this.searchInput = input; }}/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							searchResults.length > 0
							?
								(
									searchResults.map((searchResult) => (
										<Book book={searchResult} shelf={this.getShelf(searchResult)} key={searchResult.id} addToShelf={this.props.addToShelf}/>
									))
								)
							:
							"There are no search results"
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks