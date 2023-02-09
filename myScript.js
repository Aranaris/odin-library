"use strict";
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    let read_text = "";
    if (this.read) {
        read_text = "read";
    } else {
        read_text = "not read yet";
    }
    this.info = function() {
        return title + " by " + author + ", " + String(pages) + " pages, " + read_text;
    }
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(theHobbit.info());

console.log(myLibrary);
addBookToLibrary(theHobbit);
console.log(myLibrary);

const bookDisplay = document.querySelector(".book-display");

for (let i = 0; i < myLibrary.length; i++) {
    let newBook = document.createElement('div');
    newBook.className = 'book';
    newBook.textContent = myLibrary[i].info(); 
    bookDisplay.appendChild(newBook);
}