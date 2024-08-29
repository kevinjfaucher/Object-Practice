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
    

    /*
    Block Scope: In JavaScript, const (like let) is block-scoped, meaning it is only a
    ccessible within the block {} in which it is defined. Each iteration of the loop creates a new block scope, 
    so the const book variable is redefined in every iteration. 

    This is why const works here; it doesn't prevent the reassignment of book on 
    subsequent iterations because each iteration is in a separate block.

    */

    // Function to list all the books in the library
    listBooks: function() {
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];


            /*
            book.title: Accesses the title property of the book object.

            " by ": A string that adds the word "by" between the title and the author's name.

            book.author: Accesses the author property of the book object.

            " (" + book.yearPublished + ") - ": Adds the publication year in parentheses after the author's name.

            book.available: This checks the value of the available property in the book object. It’s a Boolean, so it can be either true or false.
            ? "Available": If book.available is true, the string "Available" is selected.
            : : Acts as a separator between the true and false conditions.
            "Checked Out": If book.available is false, the string "Checked Out" is selected.

            */


            console.log(book.title + " by " + book.author + " (" + book.yearPublished + ") - " + (book.available ? "Available" : "Checked Out"));
        }
    },
    
    // Function to find a book by its title
    findBook: function(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return this.books[i];
            }
        }
        return "Book not found.";
    },
    
    // Function to add a new book to the library

    /*
    This is a method (a function that is a property of an object) inside the library object, named addBook.
    It takes one parameter, newBook, which is expected to be an object representing a book. 

    This object should have properties like title, author, yearPublished, and available.

    */
    addBook: function(newBook) {

        /*
        this refers to the library object, meaning this.books accesses the books array within the library.
        The push method is used to add the newBook object to the end of the books array.
        This effectively increases the length of the books array by one, with the newBook being the last item in the array.
        */
        this.books.push(newBook);  // Add the new book to the books array
        console.log("Added: " + newBook.title + " by " + newBook.author);
    }
};

// Test the library object by calling its functions

// 1. List all the books in the library
library.listBooks();

// 2. Find a specific book by its title
console.log(library.findBook("1984")); // This will find and display the book "1984"

// 3. Add a new book to the library
const newBook = {
    title: "The Lord of the Rings",  // Title of the new book
    author: "J.R.R. Tolkien",  // Author of the new book
    yearPublished: 1954,  // Year the new book was published
    available: true  // The new book is available
};


library.addBook(newBook);



library.addBook({
    title: "The Catcher in the Rye",  // Title of the new book
    author: "J.D. Salinger",  // Author of the new book
    yearPublished: 1951,  // Year the new book was published
    available: true  // The new book is available
});

// 4. List all the books again to see the newly added book
library.listBooks();
