// framework
import React , {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// API
import * as BooksAPI from './BooksAPI'

// Internal Components
import Book from './Book'

class SearchBooks extends Component
{
	static propTypes = {
		addToList: PropTypes.func.isRequired,
		books : PropTypes.array.isRequired
	}

	state = {
		query : '',
		searchResults : []
	}

	/**
	 * called on load of component. Used mainly to apply focus to search
	 */
	componentDidMount(){
		this.searchInput.focus();
	}

	searchBooks = (query) => {
		BooksAPI.search(query, 10).then(searchResults => {
			const results = (!searchResults || searchResults.error) ? [] : searchResults
			this.setState({
				searchResults : results,
				query : query.trim()
			})
		})
	}

	render(){
		const {query, searchResults} = this.state

		const showingResults = searchResults ? searchResults : []

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
							showingResults.map((searchResult) => (
								<Book book={searchResult} shelf={this.props.getShelf(searchResult)} key={searchResult.id} addToList={this.props.addToList}/>
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks