import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './api/BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

/**
 * @description Represents the starting point for the entire application
 */
class BooksApp extends React.Component {

	state = {
		books : []
    };

	componentDidMount(){
		this.loadBookshelf()
	};

	loadBookshelf = () => {
		BooksAPI.getAll().then(allBooks => {
			this.setState({
				books : allBooks
			})
		})
	};

	addToShelf = (book, list) => {
		BooksAPI.update(book, list).then(this.loadBookshelf)
	};

	render() {
		return (
			<div>
				<Route path='/' exact render={() => (
					<ListBooks books={this.state.books} addToShelf={this.addToShelf}/>
				)}/>

				<Route path='/search' render={(history) => (
					<SearchBooks books={this.state.books} addToShelf={this.addToShelf} />
				)}/>
			</div>
		)
	};
}

export default BooksApp
