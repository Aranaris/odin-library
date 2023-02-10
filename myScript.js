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

function userAddNewBook () {
    const newBookSection = document.querySelector(".new-book-section");
    newBookSection.replaceChildren();

    let addNewBookForm = document.createElement('form');
    addNewBookForm.className = 'new-book-form';
    addNewBookForm.name = 'addNewBook';
    addNewBookForm.method = 'POST';
    addNewBookForm.action = '/addnewbook';
    
    /* adding inputs to form */
    let titleLabel = document.createElement('label');
    titleLabel.for = 'title';
    titleLabel.textContent = 'Book Title: ';
    let titleInput = document.createElement('input');
    titleInput.id = 'title';
    titleInput.type = 'text';

    let authorLabel = document.createElement('label');
    authorLabel.for = 'author';
    authorLabel.textContent = 'Book Author: ';
    let authorInput = document.createElement('input');
    authorInput.id = 'author';
    authorInput.type = 'text';

    addNewBookForm.appendChild(titleLabel);
    addNewBookForm.appendChild(titleInput);
    addNewBookForm.appendChild(authorLabel);
    addNewBookForm.appendChild(authorInput);

    newBookSection.appendChild(addNewBookForm);
}

const addNewBookButton = document.getElementById('show-book-form');
addNewBookButton.addEventListener('click', () => {
    userAddNewBook();
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

const sampleBook = new Book("SampleBook2 with really long title", "New Author", 100, false);

addBookToLibrary(theHobbit);
addBookToLibrary(sampleBook);

// setTimeout(() => { updateBookDisplay(); }, 5000);
updateBookDisplay();
