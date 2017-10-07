// framework
import React from 'react'
import {Route} from 'react-router-dom';
// API
import * as BooksAPI from './BooksAPI'
// CSS
import './App.css'
// Internal Components
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {

	state = {
		books : [],
		currentlyReading : [],
		wantToRead : [],
		read : []
    };

	componentDidMount(){
		this.loadBookshelf()
	};

	loadBookshelf = () => {
		const CURRENTLY_READING = 'currentlyReading';
		const WANTING_TO_READ = 'wantToRead';
		const ALREADY_READ = 'read';

		BooksAPI.getAll().then(allBooks => {
			this.setState({
				books : allBooks,
				currentlyReading: allBooks.filter((book) => book.shelf === CURRENTLY_READING),
				wantToRead: allBooks.filter((book) => book.shelf === WANTING_TO_READ),
				read: allBooks.filter((book) => book.shelf === ALREADY_READ)
			})
		})
	}

	addToList = (book, list) => {
		BooksAPI.update(book, list).then(this.loadBookshelf)
	};

	render() {
		return (
			<div>
				<Route path='/' exact render={() => (
					<ListBooks currentlyReading={this.state.currentlyReading} wantToRead={this.state.wantToRead} read={this.state.read} addToList={this.addToList}/>
				)}/>

				<Route path='/search' render={(history) => (
					<SearchBooks books={this.state.books} addToList={this.addToList} />
				)}/>
			</div>
		)
	};
}

export default BooksApp
