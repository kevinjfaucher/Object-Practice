/*

MAJOR NOTE: THIS CODE IS A WORK IN PROGRESS -- it's live for your reference, but it features concepts we haven't covered yet.  Don't be alarmed by what you see here, it will be covered in pieces slowly over time.

*/




// A library object with details about the library and its books
const library = {
    name: "City Library",  // The name of the library
    address: {
        street: "456 Library Lane",  // The street where the library is located
        city: "Booktown",  // The city where the library is located
        zipCode: "67890"  // The zip code of the library's location
    },
    books: [  // An array that holds all the books in the library
        {
            title: "The Great Gatsby",  // The title of the book
            author: "F. Scott Fitzgerald",  // The author of the book
            yearPublished: 1925,  // The year the book was published
            available: true  // Whether the book is available or checked out
        },
        {
            title: "1984",
            author: "George Orwell",
            yearPublished: 1949,
            available: false
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            yearPublished: 1960,
            available: true
        }
    ],
    
    // Function to list all the books in the library
    listBooks: function() {
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            console.log(book.title + " by " + book.author + " (" + book.yearPublished + ") - " + (book.available ? "Available" : "Checked Out"));
        }
    },
    
    // Function to find a book by its title
    findBook: function(title) {
        return this.books.find(book => book.title === title) || "Book not found.";
    },
    
    // Function to add a new book to the library
    addBook: function(title, author, yearPublished, available = true) {
        const newBook = {
            title: title,
            author: author,
            yearPublished: yearPublished,
            available: available
        };
        this.books.push(newBook);
        console.log("Added: " + newBook.title + " by " + newBook.author);
    },
    
    // Function to delete a book by its index
    deleteBookByIndex: function(index) {
        this.books.splice(index, 1);
        console.log("Deleted book at index " + index);
    },
    
    // Function to delete a book by its title
    deleteBookByTitle: function(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log("Deleted: " + title);
        } else {
            console.log("Book not found.");
        }
    },
    
    // Function to edit a book's details by its index
    editBook: function(index, newTitle, newAuthor, newYearPublished, newAvailable) {
        if (index >= 0 && index < this.books.length) {
            const book = this.books[index];
            book.title = newTitle !== undefined ? newTitle : book.title;
            book.author = newAuthor !== undefined ? newAuthor : book.author;
            book.yearPublished = newYearPublished !== undefined ? newYearPublished : book.yearPublished;
            book.available = newAvailable !== undefined ? newAvailable : book.available;
            console.log("Edited book at index " + index);
        } else {
            console.log("Invalid index.");
        }
    },
    
    // Function to find the book with the earliest publication year
    findOldestBook: function() {
        return this.books.reduce((oldest, book) => (book.yearPublished < oldest.yearPublished ? book : oldest), this.books[0]);
    },
    
    // Function to calculate the average publication year of the books
    findAverageYearPublished: function() {
        const totalYears = this.books.reduce((sum, book) => sum + book.yearPublished, 0);
        return totalYears / this.books.length;
    },
    
    // Function to filter books that are currently available
    filterAvailableBooks: function() {
        return this.books.filter(book => book.available);
    },
    
    // Function to filter books published after a certain year
    filterBooksAfterYear: function(year) {
        return this.books.filter(book => book.yearPublished >= year);
    }
};

// Test the updated library object by calling its functions

// 1. List all the books in the library
library.listBooks();

// 2. Find a specific book by its title
console.log(library.findBook("1984")); // This will find and display the book "1984"

// 3. Add a new book to the library
library.addBook("The Catcher in the Rye", "J.D. Salinger", 1951, true);

// 4. List all the books again to see the newly added book
library.listBooks();

// 5. Delete a book by its index
library.deleteBookByIndex(1);

// 6. List all the books to see the result after deletion
library.listBooks();

// 7. Edit a book's details
library.editBook(0, "The Great Gatsby", "F. Scott Fitzgerald", 1925, false);

// 8. Find the oldest book in the library
console.log(library.findOldestBook());

// 9. Calculate the average publication year of the books
console.log("Average Year Published: " + library.findAverageYearPublished());

// 10. Filter books that are currently available
console.log("Available Books:", library.filterAvailableBooks());

// 11. Filter books published after a certain year
console.log("Books published after 1950:", library.filterBooksAfterYear(1950));
