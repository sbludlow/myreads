import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component
{
	static propTypes = {
		currentlyReading: PropTypes.array,
		wantToRead: PropTypes.array,
		read: PropTypes.array,
		addToList: PropTypes.func.isRequired,
	}

	render(){
		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>My Diggity Diggity Reads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Bookshelf bookshelfTitle='Currently Reading' books={this.props.currentlyReading} addToList={this.props.addToList}/>
						<Bookshelf bookshelfTitle='Want to Read' books={this.props.wantToRead} addToList={this.props.addToList}/>
						<Bookshelf bookshelfTitle='Read' books={this.props.read} addToList={this.props.addToList}/>
					</div>
				</div>
				<div className="open-search">
					<Link to='/search' title="Add a book">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks