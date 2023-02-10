"use strict";
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // let read_text = "";
    // if (this.read) {
    //     read_text = "read";
    // } else {
    //     read_text = "not read yet";
    // }
    // this.info = function() {
    //     return title + " by " + author + ", " + String(pages) + " pages, " + read_text;
    // }
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function updateBookDisplay () {
    const bookDisplay = document.querySelector(".book-display");
    bookDisplay.replaceChildren();
    let bookDisplayHeader = document.createElement('h3');
    bookDisplayHeader.className = 'book-display-header';
    bookDisplayHeader.textContent = `Your Books (${myLibrary.length})`
    bookDisplay.appendChild(bookDisplayHeader);
    for (let i = 0; i < myLibrary.length; i++) {
        let newBook = document.createElement('div');
        newBook.className = 'book';
        // newBook.textContent = myLibrary[i].info(); 
        for (const property in myLibrary[i]) {
            let bookProperty = document.createElement('div');
            bookProperty.className = `${property}`;
            bookProperty.textContent = `${myLibrary[i][property]}`;
            newBook.appendChild(bookProperty);
        }
        bookDisplay.appendChild(newBook);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

const sampleBook = new Book("SampleBook2 with really long title", "New Author", 100, false);

addBookToLibrary(theHobbit);
addBookToLibrary(sampleBook);

// setTimeout(() => { updateBookDisplay(); }, 5000);
updateBookDisplay();
