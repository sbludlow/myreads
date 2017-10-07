/**
 * properties for shelf of currently reading books
 * @type {{shelf: string, title: string}}
 */
export const CURRENTLY_READING = {
	shelf: "currentlyReading",
	title: "Currently Reading"
};

/**
 * properties for shelf of wanting to read books
 * @type {{shelf: string, title: string}}
 */
export const WANT_TO_READ = {
	shelf: "wantToRead",
	title: "Want to Read"
};

/**
 * properties for shelf of already read books
 * @type {{shelf: string, title: string}}
 */
export const READ = {
	shelf: "read",
	title: "Read"
};

/**
 * properties for lack of a shelf
 * @type {{shelf: string, title: string}}
 */
export const NONE = {
	shelf: "noShelf",
	title: "None"
};

/**
 * possible shelves to use
 * @type {[null,null,null,null]}
 */
export const BOOKSHELVES = [CURRENTLY_READING, WANT_TO_READ, READ, NONE];

/**
 * only the shelves to be displayed
 * @type {[null,null,null]}
 */
export const DISPLAY_BOOKSHELVES = [CURRENTLY_READING, WANT_TO_READ, READ];