// Task: Create a Library class and manage a collection of books

class Library {
  constructor() {
    this.books = []; // Array to hold all book objects
  }

  addBook(book) {
    this.books.push(book); // Add a new book to the library
    console.log(`${book.title} by ${book.author} has been added to the library!`);
  }

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title); // Find the book by title
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0]; // Remove the book from the array
      console.log(`Removed: ${removedBook.getDetails()}`);
    } else {
      console.log(`Can't find a book with the title: ${title} to remove`);
    }
  }

  searchBook(title) {
    const book = this.books.find(book => book.title === title); // Search for a book by title
    if (book) {
      console.log(`Found: ${book.getDetails()}`); // If found, show details
    } else {
      console.log(`No book found with the title: ${title}`);
    }
  }

  listBooks() {
    if (this.books.length === 0) {
      console.log('No books in the library.'); // Inform if no books are present
    } else {
      this.books.forEach(book => book.getDetails()); // List all books
    }
  }
}

const myLibrary = new Library();

// Create a new book object using Book class
const book1 = new Book();
book1.setTitle('The Great Gatsby');
book1.setAuthor('F. Scott Fitzgerald');
book1.setYear(1925);

// Create a new book object using Book class
const book2 = new Book();
book2.setTitle('1984');
book2.setAuthor('George Orwell');
book2.setYear(1949);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// List all books
myLibrary.listBooks();

// Search for a book
myLibrary.searchBook('1984');

// Remove a book
myLibrary.removeBook('The Great Gatsby');

// List all books again
myLibrary.listBooks();

